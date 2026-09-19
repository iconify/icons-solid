import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zsjo04b8n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.75 7.11h-19.5L4.5 24l9.75 16.89h19.5L43.5 24ZM19.12 30.82V17.17l13.65 6.88Z");
}
</style><path class="zsjo04b8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yetanothervideoplayer"} {...others} />);
}

export default Component;
