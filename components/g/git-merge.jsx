import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xipnj_yzl.css';
import '../../css/j/j4ziy0blu.css';
import '../../css/c/ckfoqpbve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xipnj_yzl"/><path class="j4ziy0blu"/><circle class="ckfoqpbve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:git-merge"} {...others} />);
}

export default Component;
