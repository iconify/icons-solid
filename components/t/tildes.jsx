import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d2arhrbrd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.056 21.722H3.5v4.556h4.556zm4.555-4.555H8.056v4.555h4.555zm4.556-4.556H12.61v4.556h4.556zm4.555 4.556h-4.555v4.555h4.555zm4.556 4.555h-4.556v4.556h4.556zm4.555 4.556h-4.555v4.555h4.555zm4.556 4.555h-4.556v4.556h4.556zm4.555-4.555H35.39v4.555h4.555zm4.556-4.556h-4.556v4.556H44.5z");
}
</style><path class="d2arhrbrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tildes"} {...others} />);
}

export default Component;
