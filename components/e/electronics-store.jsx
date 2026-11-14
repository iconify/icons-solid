import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ei-sy6n3a {
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0M6 17a6 6 0 0 1 12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zvyd28wkq {
  d: path("M6 15.75h.25A1.75 1.75 0 0 1 8 17.5v2.25a1.75 1.75 0 0 1-1.75 1.75H6a1.75 1.75 0 0 1-1.75-1.75V17.5A1.75 1.75 0 0 1 6 15.75m11.75 0H18a1.75 1.75 0 0 1 1.75 1.75v2.25A1.75 1.75 0 0 1 18 21.5h-.25A1.75 1.75 0 0 1 16 19.75V17.5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="ei-sy6n3a"/><path class="zvyd28wkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:electronics-store"} {...others} />);
}

export default Component;
