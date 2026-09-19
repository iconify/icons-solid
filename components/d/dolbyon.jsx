import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hp67ubc3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 10.53h3.8A13.47 13.47 0 0 1 21.77 24v0A13.47 13.47 0 0 1 8.3 37.47H4.5h0V10.53h0Zm39 26.94h-3.77A13.47 13.47 0 0 1 26.23 24h0a13.47 13.47 0 0 1 13.5-13.47h3.8v26.94h-.03Z");
}
</style><path class="hp67ubc3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dolbyon"} {...others} />);
}

export default Component;
