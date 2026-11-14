import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ws-oeibkb {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.375 3.25h7.25q2.123 0 3.624 1.501t1.501 3.624v7.25q0 2.123-1.501 3.624t-3.624 1.501h-7.25q-2.123 0-3.624-1.501T3.25 15.625v-7.25q0-2.123 1.501-3.624T8.375 3.25");
}
</style><path class="ws-oeibkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:checkbox"} {...others} />);
}

export default Component;
