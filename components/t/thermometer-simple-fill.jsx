import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.pm14-tbgy {
  fill: currentColor;
  d: path("M160 146.08V40a32 32 0 0 0-64 0v106.08a56 56 0 1 0 64 0M128 24a16 16 0 0 1 16 16v64h-32V40a16 16 0 0 1 16-16");
}
</style><path class="pm14-tbgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:thermometer-simple-fill"} {...others} />);
}

export default Component;
