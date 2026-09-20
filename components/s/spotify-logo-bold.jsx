import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.h03aw9dpj {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m66.59-84.36a12 12 0 0 1-16.24 4.93a106.7 106.7 0 0 0-100.7 0A11.8 11.8 0 0 1 72 134a12 12 0 0 1-5.66-22.58a130.61 130.61 0 0 1 123.3 0a12 12 0 0 1 4.95 16.22m-16 36a12 12 0 0 1-16.23 5a73 73 0 0 0-68.72 0a12 12 0 0 1-11.28-21.18a97 97 0 0 1 91.28 0a12 12 0 0 1 4.95 16.18");
}
</style><path class="h03aw9dpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:spotify-logo-bold"} {...others} />);
}

export default Component;
