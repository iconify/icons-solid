import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b5gwtsb9z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.649 31.611L24.696 41.926m-13.024.574L23.836 5.536L34.612 42.5");
}

.udb3x2b6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.352 5.5l16.522 29.255l15.468-10.11");
}
</style><path class="b5gwtsb9z"/><path class="udb3x2b6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:anilibria-app"} {...others} />);
}

export default Component;
