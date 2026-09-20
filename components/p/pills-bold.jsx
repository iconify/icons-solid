import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xo3yzqm_f.css';
import '../../css/a/awitvcbqn.css';
import '../../css/q/qrv33tblr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xo3yzqm_f"/><path class="awitvcbqn"/><path clip-rule="evenodd" class="qrv33tblr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pills-bold"} {...others} />);
}

export default Component;
