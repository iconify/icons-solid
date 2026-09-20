import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y5qj_bo_c {
  fill: currentColor;
  d: path("M12.5 11V4H4v13.125L5.15 16H20V4h-2.5v7L15 9.5zM2 22V2h20v16H6zM4 4v12z");
}
</style><path class="y5qj_bo_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:comment-bank-outline-sharp"} {...others} />);
}

export default Component;
