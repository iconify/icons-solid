import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vlq1icc7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.368 5.765c9.867-2.32 30.508 11.19 32.038 17.726c1.482 6.332-22.66 21.338-31.713 18.701c-6.262-1.824-7.361-34.774-.325-36.428Z");
}
</style><path class="vlq1icc7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zalando"} {...others} />);
}

export default Component;
