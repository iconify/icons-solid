import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xorbsebsm {
  fill: currentColor;
  d: path("M4 22v-5q2.025-1.625 3.05-3.525T8.5 10H6V2h5v3h2V2h5v8h-2.525q.425 1.575 1.45 3.475T20 17v5z");
}
</style><path class="xorbsebsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chess-rook-sharp"} {...others} />);
}

export default Component;
