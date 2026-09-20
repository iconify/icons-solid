import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jezoq0b3e {
  fill: currentColor;
  d: path("M142 48v160a6 6 0 0 1-12 0V58.6L99.09 77.14a6 6 0 0 1-6.18-10.29l40-24A6 6 0 0 1 142 48");
}
</style><path class="jezoq0b3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-one-light"} {...others} />);
}

export default Component;
