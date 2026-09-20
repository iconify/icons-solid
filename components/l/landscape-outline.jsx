import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.enxs4sbmk {
  fill: currentColor;
  d: path("m2.904 17l4.192-5.616L10.558 16h8.538l-5-6.65l-3 3.992l-.634-.842l3.634-4.846l7 9.346zm2-1h4.404l-2.212-2.964zm0 0h4.404z");
}
</style><path class="enxs4sbmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:landscape-outline"} {...others} />);
}

export default Component;
