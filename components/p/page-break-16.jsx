import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9jxoghdq.css';
import '../../css/a/a12aw-hic.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="c9jxoghdq"/><path class="a12aw-hic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:page-break-16"} {...others} />);
}

export default Component;
