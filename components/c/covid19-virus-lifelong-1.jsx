import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vh271yb1c.css';
import '../../css/u/uthm9nomi.css';
import '../../css/d/dju3gg-oi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vh271yb1c"/><path class="uthm9nomi"/><path class="dju3gg-oi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid19-virus-lifelong-1"} {...others} />);
}

export default Component;
