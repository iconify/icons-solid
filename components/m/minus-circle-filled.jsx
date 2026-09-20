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

.p6qjqosxs {
  fill: var(--svg-color--000, #000);
  d: path("M8 14a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGovMNdcbz"><path class="k5-vjlrin"/><path class="p6qjqosxs"/></mask></defs><circle mask="url(#SVGovMNdcbz)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:minus-circle-filled"} {...others} />);
}

export default Component;
