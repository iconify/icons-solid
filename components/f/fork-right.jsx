import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.irvxxtnha {
  fill: currentColor;
  d: path("M9 21V6.825L7.4 8.4L6 7l4-4l4 4l-1.4 1.425l-1.6-1.6v6.525q.875-.775 1.975-1.112t2.2-.338q.275 0 .525.025t.475.075L14.6 10.4L16 9l4 4l-4 4l-1.4-1.4l1.575-1.6q-.275-.05-.55-.088t-.55-.037q-1.35 0-2.488.763T11 17v4z");
}
</style><path class="irvxxtnha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:fork-right"} {...others} />);
}

export default Component;
