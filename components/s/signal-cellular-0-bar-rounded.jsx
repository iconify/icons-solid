import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t_mbjmrqq {
  fill: currentColor;
  d: path("M4.598 21q-.444 0-.62-.401t.145-.722L19.877 4.123q.321-.321.722-.145t.401.62v15.479q0 .394-.264.658q-.265.265-.659.265zm.823-1H20V5.427z");
}
</style><path class="t_mbjmrqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:signal-cellular-0-bar-rounded"} {...others} />);
}

export default Component;
