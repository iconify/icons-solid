import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p2fp0s9rv {
  d: path("M11.9 21H3.5V4.5h17v8.8M8 2.5v4m8-4v4m-12.5 3h17M8 13.5h.01m3.99 0h.01M8 17h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yot-zlb1q {
  d: path("m14.75 17.75l3.25-3l3.25 3v3.5h-6.5Z");
}
</style><g class="ulnmmdpxh"><path class="p2fp0s9rv"/><path class="yot-zlb1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mortgage-payment-due"} {...others} />);
}

export default Component;
