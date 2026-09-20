import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nt_adgx1i {
  fill: currentColor;
  d: path("M228 200a28 28 0 0 1-54.83 8H72a48 48 0 0 1 0-96h96a24 24 0 0 0 0-48H72a8 8 0 0 1 0-16h96a40 40 0 0 1 0 80H72a32 32 0 0 0 0 64h101.17a28 28 0 0 1 54.83 8");
}
</style><path class="nt_adgx1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:path-fill"} {...others} />);
}

export default Component;
