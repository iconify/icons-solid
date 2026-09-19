import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rja6csn6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 28c0 2.77-2.23 5-5 5h-29c-2.77 0-5-2.23-5-5V17c0-1.108.892-2 2-2h35c1.108 0 2 .892 2 2zm-32.934-.73h26.868");
}
</style><path class="rja6csn6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:panasonic-eolia"} {...others} />);
}

export default Component;
