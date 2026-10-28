import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mbtf-g2sk.css';
import '../../css/q/ql8d6lb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mbtf-g2sk"/><path class="ql8d6lb8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:square-brackets-ellipsis"} {...others} />);
}

export default Component;
