import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q8p5wcbsa {
  fill: currentColor;
  d: path("M4 17v-3H2v-4h2V7h18v10zm2-2h13V9H6z");
}
</style><path class="q8p5wcbsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-very-low-sharp"} {...others} />);
}

export default Component;
