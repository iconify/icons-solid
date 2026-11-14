import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.miixt_bkg {
  d: path("M2 11.5h20V15H2ZM3.5 15v4.5a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V15M10 18.25h4M6.5 11.5v-7a2 2 0 0 1 2-2h5l4 4v5");
}

.mo42_9bmu {
  d: path("M13.5 2.5v3a1 1 0 0 0 1 1h3M9 10V8.5m2.5 1.5V6m2.5 4V8.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="miixt_bkg"/><path class="mo42_9bmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:report-archive"} {...others} />);
}

export default Component;
