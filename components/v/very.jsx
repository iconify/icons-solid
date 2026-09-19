import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.v1ijwrb-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.133 5.5l14.182 37l11.692-.088l9.86-25.786l-11.083-5.234l-5.02 14.879L19.4 5.5ZM25.77 26.27L20.31 42.5");
}
</style><path class="v1ijwrb-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:very"} {...others} />);
}

export default Component;
