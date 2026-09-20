import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nxn4riv4n.css';
import '../../css/x/xtwadebck.css';
import '../../css/o/oj8w4xbvf.css';
import '../../css/a/aeq8lyaql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nxn4riv4n"/><path class="xtwadebck"/><path class="oj8w4xbvf"/><path class="aeq8lyaql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallet-check"} {...others} />);
}

export default Component;
