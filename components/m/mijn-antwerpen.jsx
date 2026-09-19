import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m8gd20emb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.932 35.443l8.992-22.886l8.993 22.886M17.783 28.18H30.05m-19.2-13.576l3.198 4.132M4.5 21.294l6.811 2.471m-5.814 7.45l5.026-1.932m26.625-14.68l-3.198 4.133m9.55 2.558l-6.811 2.471m5.812 7.45l-5.026-1.932");
}
</style><path class="m8gd20emb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mijn-antwerpen"} {...others} />);
}

export default Component;
