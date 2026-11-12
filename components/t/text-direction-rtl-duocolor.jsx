import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tpoubkban {
  stroke-opacity: 0.4;
  d: path("m6 15l-3 3l3 3m-3-3h18");
}

.vy3fg0adm {
  d: path("M11 3h6m-5 0v8m4-8v8m-5-8a3 3 0 0 0 0 6h1");
}
</style><g class="nrj6p8qat"><path class="tpoubkban"/><path class="vy3fg0adm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-direction-rtl-duocolor"} {...others} />);
}

export default Component;
