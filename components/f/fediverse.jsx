import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fllmjqbwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24.85V5.529m8.366 14.491l-16.733-9.661m0 9.661l16.733-9.661m1.768 32.112V23.15M42.5 37.641L25.768 27.98m0 9.661L42.5 27.98M13.866 42.471V23.15m8.366 14.491L5.5 27.98m0 9.661l16.732-9.661");
}
</style><path class="fllmjqbwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fediverse"} {...others} />);
}

export default Component;
