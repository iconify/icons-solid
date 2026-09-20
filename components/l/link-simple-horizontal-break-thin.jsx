import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cyxjcbc1q {
  fill: currentColor;
  d: path("M20 128a44.05 44.05 0 0 0 44 44h40a4 4 0 0 1 0 8H64a52 52 0 0 1 0-104h40a4 4 0 0 1 0 8H64a44.05 44.05 0 0 0-44 44m172-52h-40a4 4 0 0 0 0 8h40a44 44 0 0 1 0 88h-40a4 4 0 0 0 0 8h40a52 52 0 0 0 0-104");
}
</style><path class="cyxjcbc1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:link-simple-horizontal-break-thin"} {...others} />);
}

export default Component;
