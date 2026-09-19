import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ex1p-mb-r {
  fill: currentColor;
  d: path("M10 5h4v14h-4zm-6 6h4v8H4zm16 8h-4v-6h4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.ymbm-3bvm {
  fill: currentColor;
  d: path("M16 11V3H8v6H2v12h20V11zm-6-6h4v14h-4zm-6 6h4v8H4zm16 8h-4v-6h4z");
}
</style><path class="ex1p-mb-r"/><path class="ymbm-3bvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-leaderboard"} {...others} />);
}

export default Component;
