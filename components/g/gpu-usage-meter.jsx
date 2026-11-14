import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d88pmqbfu {
  d: path("M8.5 13a3.5 3.5 0 0 1 7 0M12 13l2-2.25");
}

.opi8jdb7u {
  d: path("M2.5 5.5h19v11h-19Zm3.5 11v3h7v-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="opi8jdb7u"/><path class="d88pmqbfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:gpu-usage-meter"} {...others} />);
}

export default Component;
