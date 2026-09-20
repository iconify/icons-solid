import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lhievvbft {
  fill: currentColor;
  d: path("M4 20V4h2v16zm14 0v-7H8v-2h10V4h2v16z");
}
</style><path class="lhievvbft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-text-clip-sharp"} {...others} />);
}

export default Component;
