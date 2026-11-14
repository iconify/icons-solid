import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b2c0oacel {
  d: path("m7.134 3.882l2.954-.521l1.389 7.879l-2.954.52Zm6.778-.521l2.954.521l-1.389 7.878l-2.954-.52ZM7.5 14.75h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yqnt_pbwe {
  d: path("M7 11.5h10L16 18h3.5v2.5h-15V18H8Z");
}
</style><g class="ulnmmdpxh"><path class="yqnt_pbwe"/><path class="b2c0oacel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:magic-hat-rabbit"} {...others} />);
}

export default Component;
