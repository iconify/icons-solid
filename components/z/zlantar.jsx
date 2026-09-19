import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rhmx8ibyk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.212 10.212c7.615-7.616 19.962-7.616 27.577 0L10.21 37.789c7.616 7.615 19.963 7.615 27.578 0");
}
</style><path class="rhmx8ibyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zlantar"} {...others} />);
}

export default Component;
