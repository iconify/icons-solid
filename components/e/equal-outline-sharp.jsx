import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qb6pouu4l {
  fill: currentColor;
  d: path("M4 17v-3h16v3zm0-7V7h16v3z");
}
</style><path class="qb6pouu4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:equal-outline-sharp"} {...others} />);
}

export default Component;
