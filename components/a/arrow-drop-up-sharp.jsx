import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bczq3c8be {
  fill: currentColor;
  d: path("M8.192 13.5L12 9.692l3.808 3.808z");
}
</style><path class="bczq3c8be"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-drop-up-sharp"} {...others} />);
}

export default Component;
