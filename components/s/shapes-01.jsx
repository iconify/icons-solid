import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/x/xmrwny0vd.css';
import '../../css/b/bf9_qabtn.css';
import '../../css/i/ia_9upbwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="xmrwny0vd"/><circle class="bf9_qabtn"/><path class="ia_9upbwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shapes-01"} {...others} />);
}

export default Component;
