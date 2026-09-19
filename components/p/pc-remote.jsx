import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s3drgwbof {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 38.158l9.286-28.316l9.744 28.786m-13.459-.47l4.173-12.53m19.314 0l4.37 13M30.042 9.842l-3.714 13M17.5 9.372l9.756 28.786l6.958-28.316L43.5 38.628");
}
</style><path class="s3drgwbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pc-remote"} {...others} />);
}

export default Component;
