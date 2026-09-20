import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-mxqeckc.css';
import '../../css/x/xam7olb4z.css';
import '../../css/w/wt22uxb8m.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="x-mxqeckc"/><path clip-rule="evenodd" class="xam7olb4z"/><path clip-rule="evenodd" class="wt22uxb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:chevron-smooth-right-16"} {...others} />);
}

export default Component;
