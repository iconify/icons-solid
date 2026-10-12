import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a8ovv9mhw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 10.5v-6h14.5v6m-16.5 2v-2h4v3.25h10.5V10.5h4v9.25H2.75v-2Zm2.5 7.25v1.5m13.5-1.5v1.5");
}
</style><path class="a8ovv9mhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:corner-sofa-sharp"} {...others} />);
}

export default Component;
