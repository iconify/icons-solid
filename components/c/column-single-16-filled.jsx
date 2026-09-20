import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.svn8pkbsw {
  fill: currentColor;
  d: path("M4 3.75C4 2.784 4.784 2 5.75 2h3.5c.477 0 .91.19 1.225.5h.025v.025c.31.316.5.748.5 1.225v8.5A1.75 1.75 0 0 1 9.25 14h-3.5A1.75 1.75 0 0 1 4 12.25zm1 8.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75V6H5z");
}
</style><path class="svn8pkbsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:column-single-16-filled"} {...others} />);
}

export default Component;
