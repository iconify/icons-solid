import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xhxxx-bly.css';
import '../../css/w/whq25tb6n.css';
import '../../css/y/y_tnpl2qa.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xhxxx-bly"/><path class="whq25tb6n"/><path class="y_tnpl2qa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:alpaca"} {...others} />);
}

export default Component;
