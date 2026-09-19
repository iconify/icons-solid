import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jm5g4kxep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12 16a8.31 8.31 0 0 0-8 8a8.3 8.3 0 0 0 8 8a8.3 8.3 0 0 0 8-8a8.3 8.3 0 0 0-8-8m24 0a8.3 8.3 0 0 0-8 8a8.3 8.3 0 0 0 8 8a8.31 8.31 0 0 0 8-8a8.3 8.3 0 0 0-8-8M11.99 31.99h24.02");
}
</style><path class="jm5g4kxep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:orangevvm"} {...others} />);
}

export default Component;
