import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eurtzzbzu {
  d: path("M11 6h5.5v3.5H11Zm4 15l5.25-5.25m-4-.25h4.25v4.25");
}

.qr24ow0rj {
  d: path("M11.6 21.5H4.5v-19h15v10.1M8 2.5v19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qr24ow0rj"/><path class="eurtzzbzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:statement-export-ofx"} {...others} />);
}

export default Component;
