import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bm0ufeg4h {
  d: path("m19 14l-4 4.75h3L17 22l4-5h-3Z");
}

.g4korjm9s {
  d: path("M9.5 21H3V3h18v11.2M12 3v6m0 4v5m-9-6h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g4korjm9s"/><path class="bm0ufeg4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:electrical-plan"} {...others} />);
}

export default Component;
