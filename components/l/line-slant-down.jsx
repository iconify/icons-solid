import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.wj_a6wwur {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M.808.808a1 1 0 0 1 1.414 0l16.97 16.97a1 1 0 0 1-1.414 1.414L.808 2.222a1 1 0 0 1 0-1.414");
}
</style><path clip-rule="evenodd" class="wj_a6wwur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:line-slant-down"} {...others} />);
}

export default Component;
