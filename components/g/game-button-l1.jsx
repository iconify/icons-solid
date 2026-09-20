import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_5r5om-d {
  fill: currentColor;
  d: path("M14.55 15.5h1.35v-7H15l-2.475 1.8l.725.975l1.3-.975zm-6.4 0h4.475v-1.25h-3.1V8.5H8.15zM22 4v12q0 1.65-1.175 2.825T18 20H6q-1.65 0-2.825-1.175T2 16V4z");
}
</style><path class="a_5r5om-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:game-button-l1"} {...others} />);
}

export default Component;
