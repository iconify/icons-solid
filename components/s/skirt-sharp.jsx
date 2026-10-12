import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d5u_qi73s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.75h11v3h-11zm1.5 6h9.5l.4 1.45l2.45 8.85l.4 1.45H3.25l.4-1.45L6.1 10.2l.4-1.45zm2 .5L8.8 20M14 9.25L15.2 20");
}
</style><path class="d5u_qi73s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:skirt-sharp"} {...others} />);
}

export default Component;
