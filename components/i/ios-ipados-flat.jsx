import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nfsdq_mlk.css';
import '../../css/r/r26a9zbbk.css';
import '../../css/q/qbywzybli.css';
import '../../css/i/ir6jchbku.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="nfsdq_mlk"/><path class="r26a9zbbk"/><path clip-rule="evenodd" class="qbywzybli"/><path clip-rule="evenodd" class="ir6jchbku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ios-ipados-flat"} {...others} />);
}

export default Component;
