import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dmdnk6a3t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9c0-3.314 4.03-6 9-6s9 2.686 9 6zm0 8h18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm1-4h16");
}
</style><path class="dmdnk6a3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:burger-round"} {...others} />);
}

export default Component;
