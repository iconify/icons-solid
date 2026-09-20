import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b305n0b_b {
  fill: currentColor;
  d: path("M2 20v-4h2v4zm3 0v-4h4l.85-1.95l1.6 3.5l-1.1 2.45zm15 0v-4h2v4zm-1 0h-5.35L6.35 4H9.7L12 9.2L14.3 4h3.35l-4.05 8.85L15 16h4z");
}
</style><path class="b305n0b_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sports-hockey-outline-sharp"} {...others} />);
}

export default Component;
