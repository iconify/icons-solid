import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bil9jqo7s {
  d: path("M6.4 2.5H20v13.6m-2.4 5.4H4V7.9m8-5.4v5.6m0 7.8v5.6");
}

.kyle1ehbq {
  d: path("M6.25 16L8 14.25L9.75 16m4.5-8L16 9.75L17.75 8M3.5 3.5l17 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bil9jqo7s"/><path class="kyle1ehbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:evacuation-lift"} {...others} />);
}

export default Component;
