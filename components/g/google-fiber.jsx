import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.pa6lns0dn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23 5.5C23 15.165 15.165 23 5.5 23V5.5zm19.5 0C42.5 15.165 34.665 23 25 23V5.5zm0 19.5c0 9.665-7.835 17.5-17.5 17.5V25zM23 25c0 9.665-7.835 17.5-17.5 17.5V25z");
}
</style><path class="pa6lns0dn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:google-fiber"} {...others} />);
}

export default Component;
