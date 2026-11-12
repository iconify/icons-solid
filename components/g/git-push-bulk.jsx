import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.iu39j_bzz {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 18a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}

.zore3sagz {
  d: path("m8.293 5.293l2.999-3a1 1 0 0 1 1.415 0l3 3a.999.999 0 1 1-1.414 1.414L13 5.414V16a1 1 0 0 1-2 0V5.414L9.707 6.707a.999.999 0 1 1-1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="iu39j_bzz"/><path class="zore3sagz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-push-bulk"} {...others} />);
}

export default Component;
