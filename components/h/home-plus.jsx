import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bqsbe-gwl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5a9.25 9.25 0 0 1 9.25 9.25v18.5A9.25 9.25 0 0 1 24 42.5h0a9.25 9.25 0 0 1-9.25-9.25v-18.5A9.25 9.25 0 0 1 24 5.5");
}

.mbmqvdbvg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 14.75h18.5A9.25 9.25 0 0 1 42.5 24h0a9.25 9.25 0 0 1-9.25 9.25h-18.5A9.25 9.25 0 0 1 5.5 24h0a9.25 9.25 0 0 1 9.25-9.25");
}
</style><path class="bqsbe-gwl"/><path class="mbmqvdbvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:home-plus"} {...others} />);
}

export default Component;
