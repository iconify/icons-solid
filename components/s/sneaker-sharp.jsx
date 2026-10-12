import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ksbem5bbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17.75V6.25H7.5l1.5 3c2.75 1 7 1.5 9.5 2.75c1.75.85 2.75 2.25 2.75 4v1.75Zm6.5-5.25L10.5 11m1.5 2.25l1.25-1.5m-10.5 6h18.5v3.5H2.75z");
}
</style><path class="ksbem5bbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sneaker-sharp"} {...others} />);
}

export default Component;
