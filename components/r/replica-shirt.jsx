import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ridx-pcve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.734 3.856l1.127 1.315a1.5 1.5 0 0 0 2.278 0l1.127-1.315a1.5 1.5 0 0 1 1.76-.39l3.775 1.716a1.5 1.5 0 0 1 .85 1.071l.578 2.891a1.5 1.5 0 0 1-1.059 1.736l-1.082.309A1.5 1.5 0 0 0 18 12.631V19.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19.5v-6.869a1.5 1.5 0 0 0-1.088-1.442L3.83 10.88a1.5 1.5 0 0 1-1.059-1.736l.578-2.891a1.5 1.5 0 0 1 .85-1.071l3.775-1.716a1.5 1.5 0 0 1 1.76.39M9 3h6");
}
</style><path class="ridx-pcve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:replica-shirt"} {...others} />);
}

export default Component;
