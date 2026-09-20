import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ezuom-15v {
  fill: currentColor;
  d: path("M165.27 21.22a12 12 0 0 0-12.64 1.31L83.88 76H40a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h43.88l68.75 53.47A12 12 0 0 0 172 224V32a12 12 0 0 0-6.73-10.78M148 199.46l-52.63-40.93A12 12 0 0 0 88 156H44v-56h44a12 12 0 0 0 7.37-2.53L148 56.54Z");
}
</style><path class="ezuom-15v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:speaker-simple-none-bold"} {...others} />);
}

export default Component;
