import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qty0avndc.css';
import '../../css/n/nor7w30gi.css';
import '../../css/o/oj8w4xbvf.css';
import '../../css/a/aeq8lyaql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qty0avndc"/><path class="nor7w30gi"/><path class="oj8w4xbvf"/><path class="aeq8lyaql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wallet-add3-filled"} {...others} />);
}

export default Component;
