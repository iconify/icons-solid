import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xwm6gq8ek {
  fill: currentColor;
  d: path("M4 22V2h10l6 6v14zm9-13V4H6v16h12V9zM6 4v5zv16z");
}
</style><path class="xwm6gq8ek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:draft-outline-sharp"} {...others} />);
}

export default Component;
