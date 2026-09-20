import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wnra1jbnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.185 12.416l-7.003 7.002a5.683 5.683 0 0 0 0 8.038l.626.626a5.683 5.683 0 0 0 8.037 0l8.953-8.952a5.684 5.684 0 0 1 8.038 8.038L27.592 42.41a5.683 5.683 0 0 1-8.038 0L5.165 28.019a5.683 5.683 0 0 1 0-8.038l14.39-14.39a5.683 5.683 0 0 1 8.038 0l4.933 4.933");
}
</style><path class="wnra1jbnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:swagbucks"} {...others} />);
}

export default Component;
