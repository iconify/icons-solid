import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h2h1kccpa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 15.935v16.13l-12.56-16.13v16.13l-12.56-16.13v16.13h-5.815a8.065 8.065 0 0 1 0-16.13h2.829");
}
</style><path class="h2h1kccpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cnn"} {...others} />);
}

export default Component;
