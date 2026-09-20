import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.keqqppb5g {
  fill: currentColor;
  d: path("M228 184a4 4 0 0 1-8 0a92 92 0 0 0-157-65l-29.3 29H88a4 4 0 0 1 0 8H24a4 4 0 0 1-4-4V88a4 4 0 0 1 8 0v54.39l29.3-29.11A100 100 0 0 1 228 184");
}
</style><path class="keqqppb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-arc-left-thin"} {...others} />);
}

export default Component;
