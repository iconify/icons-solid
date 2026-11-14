import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uzqxkbcgl {
  d: path("M5 14.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM12.5 11h6v3h-6Zm0 6h6");
}

.xd1pbwbpa {
  d: path("M2.5 8h19v12.5h-19Zm4 0l9-5");
}
</style><g class="ulnmmdpxh"><path class="xd1pbwbpa"/><path class="uzqxkbcgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:radio-dab"} {...others} />);
}

export default Component;
