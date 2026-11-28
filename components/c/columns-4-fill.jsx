import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.feemjc9kg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 6C2 3.7909 3.7909 2 6 2L18 2C20.2091 2 22 3.7909 22 6L22 18C22 20.2091 20.2091 22 18 22L6 22C3.7909 22 2 20.2091 2 18L2 6ZM6.5 4L6.5 20L8.5 20L8.5 4L6.5 4ZM11 4L11 20L13 20L13 4L11 4ZM15.5 4L15.5 20L17.5 20L17.5 4L15.5 4Z");
}
</style><path clip-rule="evenodd" class="feemjc9kg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:columns-4-fill"} {...others} />);
}

export default Component;
