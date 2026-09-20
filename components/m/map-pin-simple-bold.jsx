import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dxagzus4y {
  fill: currentColor;
  d: path("M188 72a60 60 0 1 0-72 58.79V232a12 12 0 0 0 24 0V130.79A60.09 60.09 0 0 0 188 72m-60 36a36 36 0 1 1 36-36a36 36 0 0 1-36 36");
}
</style><path class="dxagzus4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:map-pin-simple-bold"} {...others} />);
}

export default Component;
