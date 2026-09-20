import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v6ek6_mfu {
  fill: currentColor;
  d: path("M12.5 11V4H4v13.125L5.15 16H20V4h-2.5v7L15 9.5zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6zM4 4v12z");
}
</style><path class="v6ek6_mfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:comment-bank-outline"} {...others} />);
}

export default Component;
