import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/k/kox-6vbfo.css';
import '../../css/n/nwt6gabgu.css';
import '../../css/q/qp9xuq1ve.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="kox-6vbfo"/><circle class="nwt6gabgu"/><path class="qp9xuq1ve"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-cocos-keeling-islands"} {...others} />);
}

export default Component;
