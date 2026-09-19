import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c-r38zbnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.523 38.141A14.84 14.84 0 0 1 24 42.5c-8.22 0-14.882-6.663-14.882-14.882S15.78 12.736 24 12.736s14.882 6.663 14.882 14.882m0 0V42.5m0-37v13.11");
}
</style><path class="c-r38zbnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:da-fit"} {...others} />);
}

export default Component;
