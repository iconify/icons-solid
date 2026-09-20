import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dn9_0uvcp.css';
import '../../css/q/q8y8mzbgx.css';
import '../../css/o/oq8v77b3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dn9_0uvcp"/><path class="q8y8mzbgx"/><path class="oq8v77b3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cloud-add"} {...others} />);
}

export default Component;
