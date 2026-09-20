import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bkq8tu_hy {
  fill: currentColor;
  d: path("M13 3a1 1 0 1 1 0 2H6.414l14.293 14.293a1 1 0 0 1-1.414 1.414L5 6.414V13a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1z");
}
</style><path class="bkq8tu_hy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-left-24-filled"} {...others} />);
}

export default Component;
