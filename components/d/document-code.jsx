import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q4oyznpnc.css';
import '../../css/v/vuq47yb6d.css';
import '../../css/t/tlhsqgbia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q4oyznpnc"/><path class="vuq47yb6d"/><path class="tlhsqgbia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:document-code"} {...others} />);
}

export default Component;
