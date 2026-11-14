import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oua_pabhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h11.5M8.75 4v10.5m5.951 1.617l2.916-2.916a2.19 2.19 0 0 1 3.094 0l.088.088a2.19 2.19 0 0 1 0 3.094l-2.916 2.916a2.19 2.19 0 0 1-3.094 0l-.088-.088a2.19 2.19 0 0 1 0-3.094m.678 1.633h4.242");
}
</style><path class="oua_pabhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:clear-text-format"} {...others} />);
}

export default Component;
