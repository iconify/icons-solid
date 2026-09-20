import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":26,"height":26};
const content = `<style>.bd9gczbnq {
  cx: 13px;
  cy: 13px;
  r: 13px;
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.ktgwus89k {
  fill: var(--svg-color--000, #000);
  d: path("M19.5 13a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGFwMsrbJx"><path class="k5-vjlrin"/><path class="ktgwus89k"/></mask></defs><circle mask="url(#SVGFwMsrbJx)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:circle-filled-circle-filled"} {...others} />);
}

export default Component;
