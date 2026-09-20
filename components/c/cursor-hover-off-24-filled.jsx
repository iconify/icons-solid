import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t_s8nt5od {
  fill: currentColor;
  d: path("M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.045 1.046A2.5 2.5 0 0 0 2 6.5v9A2.5 2.5 0 0 0 4.5 18H9v-7.25q0-.307.102-.588l.898.899V21.25a.75.75 0 0 0 1.368.425l2.467-3.588l4.042.85l2.842 2.843a.75.75 0 0 0 1.061-1.06zM7.182 4L20.81 17.63A2.5 2.5 0 0 0 22 15.5v-9A2.5 2.5 0 0 0 19.5 4z");
}
</style><path class="t_s8nt5od"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:cursor-hover-off-24-filled"} {...others} />);
}

export default Component;
