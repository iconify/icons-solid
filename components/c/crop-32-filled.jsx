import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.tbywglhna {
  fill: currentColor;
  d: path("M9 3.25a1.25 1.25 0 1 0-2.5 0V6.5H3.25a1.25 1.25 0 1 0 0 2.5H6.5v11.5a5 5 0 0 0 5 5H23v3.25a1.25 1.25 0 1 0 2.5 0V25.5h3.25a1.25 1.25 0 1 0 0-2.5H11.5A2.5 2.5 0 0 1 9 20.5zm14 8.25v10h2.5v-10a5 5 0 0 0-5-5h-10V9h10a2.5 2.5 0 0 1 2.5 2.5");
}
</style><path class="tbywglhna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:crop-32-filled"} {...others} />);
}

export default Component;
