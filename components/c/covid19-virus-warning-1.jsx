import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yylgmr2nv.css';
import '../../css/c/c9obvju-w.css';
import '../../css/r/r4dmb4bvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yylgmr2nv"/><path class="c9obvju-w"/><path class="r4dmb4bvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid19-virus-warning-1"} {...others} />);
}

export default Component;
