import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.me4egdcvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.26 13.76l10.5-10.5a1.75 1.75 0 0 1 2.48 2.48l-10.5 10.5a1.75 1.75 0 0 1-2.48-2.48Zm9.49-.26h8.5m-7.25 0v3a3 3 0 0 0 6 0v-3m-3 0V16");
}
</style><path class="me4egdcvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tongue-depressor-sharp"} {...others} />);
}

export default Component;
