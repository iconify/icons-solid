import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.d8923fvvp {
  fill: currentColor;
  d: path("M232 136.66A104.12 104.12 0 1 1 119.34 24a8 8 0 0 1 1.32 16A88.12 88.12 0 1 0 216 135.34a8 8 0 0 1 16 1.32M120 72v56a8 8 0 0 0 8 8h56a8 8 0 0 0 0-16h-48V72a8 8 0 0 0-16 0m40-24a12 12 0 1 0-12-12a12 12 0 0 0 12 12m36 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12m24 36a12 12 0 1 0-12-12a12 12 0 0 0 12 12");
}
</style><path class="d8923fvvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:clock-countdown"} {...others} />);
}

export default Component;
