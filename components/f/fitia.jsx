import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.y4xbw4b8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.125 33.25a4.625 4.625 0 0 0 0 9.25h4.125a4.625 4.625 0 0 0 0-9.25zm0-13.875a4.625 4.625 0 0 0 0 9.25h16.5a4.625 4.625 0 0 0 0-9.25zm0-13.875a4.625 4.625 0 0 0 0 9.25h27.75a4.625 4.625 0 0 0 0-9.25z");
}
</style><path class="y4xbw4b8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fitia"} {...others} />);
}

export default Component;
