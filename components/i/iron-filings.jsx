import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qi2kegbjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5V13a7.5 7.5 0 0 0 15 0V8.5h-4V13a3.5 3.5 0 0 1-7 0V8.5Zm0 3h4m7 0h4m-7.5-9v3M7.5 3l1 2.5m8-2.5l-1 2.5");
}
</style><path class="qi2kegbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:iron-filings"} {...others} />);
}

export default Component;
