import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fhw89ta8o {
  fill: currentColor;
  d: path("M256 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m-32-16v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24m-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm-92 52a8 8 0 0 0 8-8V96a8 8 0 0 0-16 0v28a8 8 0 0 0 8 8m0 12a12 12 0 1 0 12 12a12 12 0 0 0-12-12");
}
</style><path class="fhw89ta8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:battery-warning"} {...others} />);
}

export default Component;
