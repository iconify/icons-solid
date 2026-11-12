import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d15wbrb2w {
  d: path("M19.5 7.5L21 6");
}

.gsvz4o5yr {
  d: path("M4.5 7.5L3 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k65hgkb4u {
  d: path("M7.5 10.5L9 12L3 18");
}

.lq7l02bvw {
  d: path("M16.5 10.5L15 12L21 18");
}
</style><g class="hntgybcog"><path class="k65hgkb4u"/><path class="gsvz4o5yr"/><path class="lq7l02bvw"/><path class="d15wbrb2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-right-left-broken"} {...others} />);
}

export default Component;
