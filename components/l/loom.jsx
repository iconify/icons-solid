import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xkcbbrbzm.css';
import '../../css/m/md286fbip.css';
import '../../css/a/afxenvblv.css';
import '../../css/z/zhnu5sbcn.css';
import '../../css/p/pcp1pubtx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="xkcbbrbzm"/><g class="md286fbip"><path class="afxenvblv"/><path class="zhnu5sbcn"/><path class="pcp1pubtx"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:loom"} {...others} />);
}

export default Component;
