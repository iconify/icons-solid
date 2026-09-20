import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.w373lybhq {
  fill: currentColor;
  d: path("M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16m-64 0H64V40h104Zm-40-84a12 12 0 1 1 12 12a12 12 0 0 1-12-12");
}
</style><path class="w373lybhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:door-open-fill"} {...others} />);
}

export default Component;
