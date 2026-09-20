import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.r-i9m2bhg {
  fill: currentColor;
  d: path("M80 48a8 8 0 0 1-8 8H40v16a8 8 0 0 1-16 0V56a16 16 0 0 1 16-16h32a8 8 0 0 1 8 8M32 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m40 48H40v-16a8 8 0 0 0-16 0v16a16 16 0 0 0 16 16h32a8 8 0 0 0 0-16m72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m80-24a8 8 0 0 0-8 8v16h-32a8 8 0 0 0 0 16h32a16 16 0 0 0 16-16v-16a8 8 0 0 0-8-8m0-72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m-8-64h-32a8 8 0 0 0 0 16h32v16a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16m-72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16");
}
</style><path class="r-i9m2bhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:rectangle-dashed"} {...others} />);
}

export default Component;
