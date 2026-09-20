import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.aexvhjbzr {
  fill: currentColor;
  d: path("M224 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0m-48 8H80a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 88H40a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h136a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16");
}
</style><path class="aexvhjbzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:align-right-fill"} {...others} />);
}

export default Component;
