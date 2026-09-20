import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iixgb8z1f {
  fill: currentColor;
  d: path("M7.5 20q-1.45 0-2.475-1.025T4 16.5t1.025-2.475T7.5 13h11q1.45 0 2.475 1.025T22 16.5t-1.025 2.475T18.5 20zm-2-9q-1.45 0-2.475-1.025T2 7.5t1.025-2.475T5.5 4h11q1.45 0 2.475 1.025T20 7.5t-1.025 2.475T16.5 11z");
}
</style><path class="iixgb8z1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-object-track"} {...others} />);
}

export default Component;
