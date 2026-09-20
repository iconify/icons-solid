import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iyr6bob_l {
  fill: currentColor;
  d: path("M12 14.702L6.692 9.394l.708-.707L12 13.28l4.6-4.594l.708.707z");
}
</style><path class="iyr6bob_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stat-minus-1-outline-sharp"} {...others} />);
}

export default Component;
