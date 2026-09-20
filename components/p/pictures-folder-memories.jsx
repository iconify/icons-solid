import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kq04ie9_c.css';
import '../../css/e/e7w2psbvj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="to-5kdesz"><path class="kq04ie9_c"/><path class="e7w2psbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:pictures-folder-memories"} {...others} />);
}

export default Component;
