import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.qtuid6bgm {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 88a8 8 0 0 1 0 16H80.68A48.07 48.07 0 0 0 128 176h48a8 8 0 0 1 0 16h-48a64 64 0 0 1 0-128h48a8 8 0 0 1 0 16h-48a48.07 48.07 0 0 0-47.32 40Z");
}
</style><path class="qtuid6bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:member-of-fill"} {...others} />);
}

export default Component;
