import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.akgtkvahg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.97 36.47C10.083 36.47 4.5 30.887 4.5 24s5.583-12.47 12.47-12.47h14.06c6.887 0 12.47 5.583 12.47 12.47s-5.583 12.47-12.47 12.47zm2.701-24.94v24.94m0-12.47H4.5");
}
</style><path class="akgtkvahg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:swayam"} {...others} />);
}

export default Component;
