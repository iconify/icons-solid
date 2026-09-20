import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e6w_aebsk {
  fill: currentColor;
  d: path("M5 12.5v-1h6.792l5.5-5.5H14V5h5v5h-1V6.708L12.208 12.5zm9 6.5v-1h3.292l-3.854-3.842l.72-.72L18 17.293V14h1v5z");
}
</style><path class="e6w_aebsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-split-outline"} {...others} />);
}

export default Component;
