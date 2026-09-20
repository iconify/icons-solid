import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y0miy-bej.css';
import '../../css/x/xb5_th8-b.css';
import '../../css/o/odbl5xbko.css';
import '../../css/s/s9kyitb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y0miy-bej"/><path class="xb5_th8-b"/><path class="odbl5xbko"/><path class="s9kyitb7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:calculator-calculator-app"} {...others} />);
}

export default Component;
