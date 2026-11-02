import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wk7cx-bnj {
  fill: currentColor;
  d: path("M9 5v6a3 3 0 1 0 6 0V5a1 1 0 0 1 2 0v6a5 5 0 0 1-10 0V5a1 1 0 0 1 2 0m9 13a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><path class="wk7cx-bnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:underline-fill-sharp"} {...others} />);
}

export default Component;
