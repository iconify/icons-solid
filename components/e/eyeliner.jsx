import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hvf_b9r5h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12.5H12v9H3.5Zm2-3H10v3H5.5Zm10.207-4.078l2.121 2.121l-3.535 3.535l-2.121-2.121Zm1.061 1.06L19.95 3.3");
}
</style><path class="hvf_b9r5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:eyeliner"} {...others} />);
}

export default Component;
