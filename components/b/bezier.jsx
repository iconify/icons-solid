import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kkjojr6tv.css';
import '../../css/w/wea6_tbyn.css';
import '../../css/f/f8gwan4-o.css';
import '../../css/m/m17cbmwng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="kkjojr6tv"/><path class="wea6_tbyn"/><path class="f8gwan4-o"/><path class="m17cbmwng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:bezier"} {...others} />);
}

export default Component;
