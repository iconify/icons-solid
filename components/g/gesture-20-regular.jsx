import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.banak16sz {
  fill: currentColor;
  d: path("M5.011 4.394A.5.5 0 0 1 5.5 4h9a.5.5 0 0 1 0 1H7.808l8.899 4.045a.5.5 0 0 1 .03.895l-11 5.923a.5.5 0 1 1-.474-.88l10.112-5.445L5.293 4.955a.5.5 0 0 1-.282-.56M17 4.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M3.5 17a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1");
}
</style><path class="banak16sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:gesture-20-regular"} {...others} />);
}

export default Component;
