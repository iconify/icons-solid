import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.econ6b2wq {
  fill: currentColor;
  d: path("M14 6.5a5.5 5.5 0 0 0-5.496 5.28a.75.75 0 0 1-.75.72H7.5a4 4 0 0 0 0 8h8.405L15.05 22H7.5a5.5 5.5 0 0 1-.431-10.983A7 7 0 0 1 14 5h.014a6.98 6.98 0 0 1 4.81 1.927A6.98 6.98 0 0 1 21 12h-1.5A5.5 5.5 0 0 0 14 6.5m2 7.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H23v3.802a2 2 0 0 0 .262.99l.688 1.208h-6.895l.683-1.2a2 2 0 0 0 .262-.989V14.5h-1.25a.75.75 0 0 1-.75-.75m.201 8.25l-1 1.758A1.5 1.5 0 0 0 16.504 26h7.997a1.5 1.5 0 0 0 1.303-2.242l-1-1.758z");
}
</style><path class="econ6b2wq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:cloud-beaker-28-regular"} {...others} />);
}

export default Component;
