import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fnrcxse9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 8a5.25 5.25 0 0 1 10.5 0A1.25 1.25 0 0 1 16 8a2.75 2.75 0 0 0-5.5 0A1.25 1.25 0 0 1 8 8Zm1.25 1.25v9.25m-1.5 0h3v2.75h-3z");
}
</style><path class="fnrcxse9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:walking-cane-sharp"} {...others} />);
}

export default Component;
