import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.aiaq-29df {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.41 4.5a7.51 7.51 0 0 1 7.52 7.5v10a7.53 7.53 0 1 1-15 0V12a7.52 7.52 0 0 1 7.48-7.5M4 22.08h7.86a13.56 13.56 0 0 0 13.55 13.56v7.86A21.42 21.42 0 0 1 4 22.08");
}
</style><path class="aiaq-29df"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:callrecorder"} {...others} />);
}

export default Component;
