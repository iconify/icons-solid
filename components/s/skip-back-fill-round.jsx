import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hw2qafb1b {
  fill: currentColor;
  d: path("M14.781 4.672A4 4 0 0 1 21 8v8a4 4 0 0 1-6.219 3.328l-6-4a4 4 0 0 1 0-6.656ZM5 19a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Z");
}
</style><path class="hw2qafb1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:skip-back-fill-round"} {...others} />);
}

export default Component;
