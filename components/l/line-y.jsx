import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.vph0mqbap {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 1a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1");
}
</style><path clip-rule="evenodd" class="vph0mqbap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:line-y"} {...others} />);
}

export default Component;
