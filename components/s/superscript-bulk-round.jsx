import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.g9i4yiffc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20.707 5.707L18.414 8H20a1 1 0 0 1 0 2h-4a1.002 1.002 0 0 1-.707-1.707l3.646-3.646A1.002 1.002 0 0 0 17 5a1 1 0 0 1-2 0a3.001 3.001 0 0 1 6 0c0 .265-.105.52-.293.707");
}

.mlth9vbtv {
  d: path("m8 15.586l3.293-3.293a.999.999 0 1 1 1.414 1.414L9.414 17l3.293 3.293a.999.999 0 1 1-1.414 1.414L8 18.414l-3.293 3.293a.999.999 0 1 1-1.414-1.414L6.586 17l-3.293-3.293a.999.999 0 1 1 1.414-1.414Z");
}
</style><g class="cuyn6tgcc"><path class="g9i4yiffc"/><path class="mlth9vbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:superscript-bulk-round"} {...others} />);
}

export default Component;
