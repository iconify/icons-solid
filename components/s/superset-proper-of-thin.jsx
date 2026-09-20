import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.c9zvvld_r {
  fill: currentColor;
  d: path("M220 128a84.09 84.09 0 0 1-84 84H64a4 4 0 0 1 0-8h72a76 76 0 0 0 0-152H64a4 4 0 0 1 0-8h72a84.09 84.09 0 0 1 84 84");
}
</style><path class="c9zvvld_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:superset-proper-of-thin"} {...others} />);
}

export default Component;
