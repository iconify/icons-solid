import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xfkvxob0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.5 33.25v9.25h33L28.3 24h2.95a9.25 9.25 0 0 0 0-18.5H7.5v9.25M16.75 24H7.5");
}
</style><path class="xfkvxob0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:reev-pro"} {...others} />);
}

export default Component;
