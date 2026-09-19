import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ukh69-4iu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.28 36.055a4.5 4.5 0 1 0 4.217-6.056H7.5m10.78-18.054a4.5 4.5 0 1 1 4.218 6.056H4.5m30.277-.057A4.5 4.5 0 1 1 38.996 24H5.999");
}
</style><path class="ukh69-4iu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:anemo"} {...others} />);
}

export default Component;
