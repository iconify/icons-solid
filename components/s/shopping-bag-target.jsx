import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mmefwdmgd.css';
import '../../css/q/qbj_lybpr.css';
import '../../css/w/wkqxadc8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mmefwdmgd"/><path class="qbj_lybpr"/><path class="wkqxadc8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:shopping-bag-target"} {...others} />);
}

export default Component;
