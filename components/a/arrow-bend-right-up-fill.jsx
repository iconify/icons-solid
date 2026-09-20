import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mp-ap5bwu {
  fill: currentColor;
  d: path("M207.39 83.06A8 8 0 0 1 200 88h-40v40A104.11 104.11 0 0 1 56 232a8 8 0 0 1 0-16a88.1 88.1 0 0 0 88-88V88h-40a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 1.73 8.72");
}
</style><path class="mp-ap5bwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-bend-right-up-fill"} {...others} />);
}

export default Component;
