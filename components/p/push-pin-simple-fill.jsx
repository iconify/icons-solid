import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.k630vlb6p {
  fill: currentColor;
  d: path("M224 176a8 8 0 0 1-8 8h-80v56a8 8 0 0 1-16 0v-56H40a8 8 0 0 1 0-16h9.29L70.46 48H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16h-6.46l21.17 120H216a8 8 0 0 1 8 8");
}
</style><path class="k630vlb6p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:push-pin-simple-fill"} {...others} />);
}

export default Component;
