import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.h7c1bnbug {
  fill: currentColor;
  d: path("M15.566 16.996a.5.5 0 0 0 .4-.31l1.998-5a.5.5 0 0 0-.928-.371L15.5 15.152L10.91 3.628c-.329-.828-1.495-.843-1.847-.024l-5.023 11.7a.5.5 0 0 0 .919.394l5.023-11.7l4.567 11.468l-3.826-1.913a.5.5 0 0 0-.447.894l4.982 2.491a.5.5 0 0 0 .307.058");
}
</style><path class="h7c1bnbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-turn-up-down-20-regular"} {...others} />);
}

export default Component;
