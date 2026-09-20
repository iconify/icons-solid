import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ydtdn1bbi {
  fill: currentColor;
  d: path("M237.66 77.66L203.31 112l26.35 26.34a8 8 0 0 1-11.32 11.32l-6.34-6.35l-53 53a40 40 0 0 1-56.57 0l-15.68-15.74l-49.09 49.09a8 8 0 0 1-11.32-11.32l49.09-49.09l-15.71-15.71a40 40 0 0 1 0-56.57l53-53l-6.35-6.34a8 8 0 0 1 11.32-11.32L144 52.69l34.34-34.35a8 8 0 1 1 11.32 11.32L155.31 64L192 100.69l34.34-34.35a8 8 0 0 1 11.32 11.32");
}
</style><path class="ydtdn1bbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:plug-fill"} {...others} />);
}

export default Component;
