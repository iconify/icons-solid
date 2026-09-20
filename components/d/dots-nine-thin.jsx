import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xqy_2pb-c {
  fill: currentColor;
  d: path("M68 60a8 8 0 1 1-8-8a8 8 0 0 1 8 8m60-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 16a8 8 0 1 0-8-8a8 8 0 0 0 8 8M60 120a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8M60 188a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8");
}
</style><path class="xqy_2pb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dots-nine-thin"} {...others} />);
}

export default Component;
