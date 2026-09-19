import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a28xsovsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.006 8.33c3.773-3.773 9.89-3.773 13.664 0s3.773 9.89 0 13.664L21.994 39.67a9.66 9.66 0 0 1-13.664 0a9.66 9.66 0 0 1 0-13.664z");
}
</style><path class="a28xsovsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:koober"} {...others} />);
}

export default Component;
