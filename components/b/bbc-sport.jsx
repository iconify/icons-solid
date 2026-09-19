import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ihgqvjcoo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 6.078h37v11.948h-37zm13.029 11.948H42.5v11.948H18.529zm10.603 11.948H42.5v11.948H29.132z");
}
</style><path class="ihgqvjcoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bbc-sport"} {...others} />);
}

export default Component;
