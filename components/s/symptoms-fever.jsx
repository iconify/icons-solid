import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ynlcsab1g.css';
import '../../css/n/nno0nubpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ynlcsab1g"/><path class="nno0nubpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:symptoms-fever"} {...others} />);
}

export default Component;
