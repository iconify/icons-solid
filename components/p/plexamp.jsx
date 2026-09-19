import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.poc2rhbvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 24h18.944L12.808 9.342h4.075L27.519 24L16.883 38.658h4.074L31.594 24L20.957 9.342h4.075L35.668 24L25.032 38.658h4.075L39.743 24H43.5");
}
</style><path class="poc2rhbvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:plexamp"} {...others} />);
}

export default Component;
