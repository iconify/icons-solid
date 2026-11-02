import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a1kmyhber {
  fill: currentColor;
  d: path("M8 11h8V5a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0v-6H8v6a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Z");
}
</style><path class="a1kmyhber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:heading-fill-round"} {...others} />);
}

export default Component;
