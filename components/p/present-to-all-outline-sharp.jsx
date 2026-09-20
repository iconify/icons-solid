import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hf1fucc8t {
  fill: currentColor;
  d: path("M11 16h2v-4.15l1.6 1.575L16.025 12L12 8l-4 4l1.425 1.4L11 11.825zm-9 4V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="hf1fucc8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:present-to-all-outline-sharp"} {...others} />);
}

export default Component;
