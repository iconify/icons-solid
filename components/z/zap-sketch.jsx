import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oc-a5jbga.css';
import '../../css/y/yy6sjibep.css';
import '../../css/x/xjqifybeo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="oc-a5jbga"/><path class="yy6sjibep"/><path class="xjqifybeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:zap-sketch"} {...others} />);
}

export default Component;
