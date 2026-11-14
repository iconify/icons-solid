import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t89-ebr-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20v-7H4V9.5h3V13h5V9.5h3V13l3-2.5V13l3.5-2.5V20Zm1-14.75a2 1.5 0 1 0 4 0a2 1.5 0 1 0-4 0Zm8 0a2 1.5 0 1 0 4 0a2 1.5 0 1 0-4 0Z");
}
</style><path class="t89-ebr-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:emissions"} {...others} />);
}

export default Component;
