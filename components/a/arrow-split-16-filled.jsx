import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.r3k_wqbeh {
  fill: currentColor;
  d: path("M8 2a.75.75 0 0 1 .75.75V6H11a1.5 1.5 0 0 1 1.5 1.5v3.94l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V7.5H5v3.94l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V7.5A1.5 1.5 0 0 1 5 6h2.25V2.75A.75.75 0 0 1 8 2");
}
</style><path class="r3k_wqbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-split-16-filled"} {...others} />);
}

export default Component;
