import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.gjjhy86ew {
  fill: currentColor;
  d: path("M2 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm0 4v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5zm3.5 1.5A.5.5 0 0 1 6 6h2a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5M13 5.085A1.5 1.5 0 0 1 14 6.5V12a3 3 0 0 1-3 3H6a2 2 0 0 1-1.732-1H11a2 2 0 0 0 2-2z");
}
</style><path class="gjjhy86ew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:archive-multiple-16-filled"} {...others} />);
}

export default Component;
