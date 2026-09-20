import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x1uszlbzw {
  fill: currentColor;
  d: path("M15 20v-9H6.8l1.6 1.6L7 14l-4-4l4-4l1.4 1.4L6.8 9H15q.825 0 1.413.588T17 11v9z");
}
</style><path class="x1uszlbzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:turn-left"} {...others} />);
}

export default Component;
