import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.l71i66bgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.65 24c-6.397 0-3.951 10-7.927 10c-4 0-1.152-10-6.847-10c-6.46 0-3.287 18.5-9.559 18.5c-7.4 0-2.132-18.5-12.667-18.5c10.535 0 5.267-18.5 12.667-18.5c6.272 0 3.1 18.5 9.56 18.5c5.694 0 2.847-10 6.846-10c3.976 0 1.53 10 7.927 10");
}
</style><path class="l71i66bgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:turn-up"} {...others} />);
}

export default Component;
