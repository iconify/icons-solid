import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aiqmhrbjl {
  d: path("M10.707 9.293L12 10.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L13.414 12l1.293 1.293a.999.999 0 1 1-1.414 1.414L12 13.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414L10.586 12l-1.293-1.293a.999.999 0 1 1 1.414-1.414");
}

.cuyn6tgcc {
  fill: currentColor;
}

.z7pcgrb_q {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 8.236v7.528a3 3 0 0 1-1.658 2.683l-6 3a3 3 0 0 1-2.684 0l-6-3A3 3 0 0 1 3 15.764V8.236a3 3 0 0 1 1.658-2.683l6-3a3 3 0 0 1 2.684 0l6 3A3 3 0 0 1 21 8.236");
}
</style><g class="cuyn6tgcc"><path class="z7pcgrb_q"/><path class="aiqmhrbjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hexagon-close-bulk"} {...others} />);
}

export default Component;
