import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.awyi7ubmy {
  d: path("M5.707 19.707a.999.999 0 1 1-1.414-1.414l14-14a.999.999 0 1 1 1.414 1.414Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.demqk_b8r {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4.236 5.832A3 3 0 1 1 9.763 8.17a3 3 0 0 1-5.527-2.338m2.057 1.875a.999.999 0 1 0 1.414-1.414a.999.999 0 1 0-1.414 1.414m7.943 8.125a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338m2.057 1.875a.999.999 0 1 0 1.414-1.414a.999.999 0 1 0-1.414 1.414");
}
</style><g class="cuyn6tgcc"><path class="demqk_b8r"/><path class="awyi7ubmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:percent-bulk-round"} {...others} />);
}

export default Component;
