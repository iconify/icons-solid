import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnzp6-gsx.css';
import '../../css/w/wl3st4cag.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="pnzp6-gsx"/><path clip-rule="evenodd" class="wl3st4cag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:chevron-double-up-16"} {...others} />);
}

export default Component;
