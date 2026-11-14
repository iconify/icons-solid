import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h7cms5v3o {
  d: path("m5 14.5l1.75 1.75L9.5 12.5m5.25 0l3.5 3.5m0-3.5l-3.5 3.5");
}

.mgyqt7bni {
  d: path("M2.5 4h19v16h-19Zm0 4.5h19m-9.5 0V20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mgyqt7bni"/><path class="h7cms5v3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:browser-compatibility"} {...others} />);
}

export default Component;
