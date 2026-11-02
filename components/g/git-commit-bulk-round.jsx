import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c1thob-9r {
  d: path("M3 11h7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m11 0h7a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.uz103-b6l {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9.236 10.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338");
}
</style><g class="cuyn6tgcc"><path class="uz103-b6l"/><path class="c1thob-9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-commit-bulk-round"} {...others} />);
}

export default Component;
