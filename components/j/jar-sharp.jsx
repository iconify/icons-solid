import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pzw9ypbmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h11.5v2.5H6.25zm.75 5h10v.5l1.98.7l.02 2.1v10.2H5v-10.2l.02-2.1L7 8.25Zm1.5 6h7m-7 3H13");
}
</style><path class="pzw9ypbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:jar-sharp"} {...others} />);
}

export default Component;
