import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.rq0l_w2wy {
  fill: currentColor;
  d: path("M11.369 6.225a1 1 0 0 1 1.406 1.406l-.068.076L9.414 11H19a7 7 0 0 1 .36 13.991L19 25h-9a1 1 0 0 1 0-2h9l.257-.007A5 5 0 0 0 19 13H9.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5z");
}
</style><path class="rq0l_w2wy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-hook-up-left-32-regular"} {...others} />);
}

export default Component;
