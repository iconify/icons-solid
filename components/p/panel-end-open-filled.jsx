import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j05dnx8-k.css';
import '../../css/x/xzf0_rb6r.css';
import '../../css/y/yq4fe1-th.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j05dnx8-k"/><path class="xzf0_rb6r"/><path class="yq4fe1-th"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:panel-end-open-filled"} {...others} />);
}

export default Component;
