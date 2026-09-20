import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ghls6ybrc {
  fill: currentColor;
  d: path("M10.524 5a3.25 3.25 0 0 0-3.018 2.043l-6.2 15.5C.452 24.678 2.024 27 4.324 27h17.153a3.25 3.25 0 0 0 3.017-2.043l6.2-15.5C31.548 7.322 29.976 5 27.677 5z");
}
</style><path class="ghls6ybrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:rhombus-32-filled"} {...others} />);
}

export default Component;
