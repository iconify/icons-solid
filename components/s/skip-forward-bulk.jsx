import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.fwp9lvbrl {
  d: path("M21 5v14a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0");
}

.nkq2_lbze {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m7.59 4.456l8 5a3 3 0 0 1 0 5.088l-8 5A2.999 2.999 0 0 1 3 17V7a3 3 0 0 1 4.59-2.544");
}
</style><g class="cuyn6tgcc"><path class="nkq2_lbze"/><path class="fwp9lvbrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:skip-forward-bulk"} {...others} />);
}

export default Component;
