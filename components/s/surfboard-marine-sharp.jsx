import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f06qbcblb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 2.75c2.25 0 3.5 4 3.5 8.75s-1.25 7.25-3.5 7.25s-3.5-3-3.5-7.25S6 2.75 8.25 2.75Zm0 3v10m5.5 4c.75-4.25 3-7.75 6-7.75h1.5v2.75H19.5m-16.75 6.5h18.5");
}
</style><path class="f06qbcblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:surfboard-marine-sharp"} {...others} />);
}

export default Component;
