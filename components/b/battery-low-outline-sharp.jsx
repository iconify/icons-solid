import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xcm4_ib0f {
  fill: currentColor;
  d: path("M4 17v-3H2v-4h2V7h18v10zm2-2h11V9H6z");
}
</style><path class="xcm4_ib0f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-low-outline-sharp"} {...others} />);
}

export default Component;
