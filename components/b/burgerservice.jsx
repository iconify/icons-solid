import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nvchwbarr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.292 15.761V43.5M22.15 29.63a6.935 6.935 0 0 1 0 13.87H10.708V15.761H22.15a6.935 6.935 0 1 1 0 13.87m0 0H10.708m0-19.486h26.584M10.708 4.5v5.645M37.292 4.5v5.645M24 4.5v5.645");
}
</style><path class="nvchwbarr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:burgerservice"} {...others} />);
}

export default Component;
