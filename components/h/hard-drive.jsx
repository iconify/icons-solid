import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.v_higwgud {
  fill: currentColor;
  d: path("M224 64H32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 112H32V80h192zm-24-48a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="v_higwgud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:hard-drive"} {...others} />);
}

export default Component;
