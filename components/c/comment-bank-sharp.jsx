import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fl6lqk5vz {
  fill: currentColor;
  d: path("M12.5 11L15 9.5l2.5 1.5V4h-5zM2 22V2h20v16H6z");
}
</style><path class="fl6lqk5vz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:comment-bank-sharp"} {...others} />);
}

export default Component;
