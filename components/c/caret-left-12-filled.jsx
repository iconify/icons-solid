import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.d0zcq54fq {
  fill: currentColor;
  d: path("M6.299 3.282C6.93 2.659 8 3.107 8 3.994v4.012c0 .887-1.07 1.335-1.701.713L4.26 6.713a1 1 0 0 1 0-1.425z");
}
</style><path class="d0zcq54fq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:caret-left-12-filled"} {...others} />);
}

export default Component;
