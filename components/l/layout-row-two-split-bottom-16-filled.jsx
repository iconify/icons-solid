import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.g0580jb_i {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v3h12v-3A2.5 2.5 0 0 0 11.5 2zM14 8.5H8.5V14h3a2.5 2.5 0 0 0 2.5-2.5zm-6.5 0H2v3A2.5 2.5 0 0 0 4.5 14h3z");
}
</style><path class="g0580jb_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-row-two-split-bottom-16-filled"} {...others} />);
}

export default Component;
