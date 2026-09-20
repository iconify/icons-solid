import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vajk4gc5p {
  fill: currentColor;
  d: path("M9 21q-1.925 0-3.463-1.1T3.35 17h17.3q-.65 1.8-2.187 2.9T15 21zm-6-6V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v6z");
}
</style><path class="vajk4gc5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:nest-wifi-router"} {...others} />);
}

export default Component;
