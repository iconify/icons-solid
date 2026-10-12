import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tgvsyfb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 2.75h13.5V6.5H5.25zm1 3.75h11.5l-1 12.75l-.222 1.764L14.75 21h-5.5l-1.778.014l-.222-1.764Zm2.75 5h6m-6 3h4");
}
</style><path class="tgvsyfb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:specimen-cup-sharp"} {...others} />);
}

export default Component;
