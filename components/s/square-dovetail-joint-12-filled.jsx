import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.kwe1dxbuz {
  fill: currentColor;
  d: path("M5.192 6.606A.5.5 0 0 0 5 7v2.999H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1v3a.498.498 0 0 0 .621.485L7 5.14v1.719l-1.379-.344a.5.5 0 0 0-.429.091M6 2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6V7.641l1.379.345A.498.498 0 0 0 8 7.5v-3a.5.5 0 0 0-.621-.485L6 4.359z");
}
</style><path class="kwe1dxbuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:square-dovetail-joint-12-filled"} {...others} />);
}

export default Component;
