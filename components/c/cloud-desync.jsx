import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hvyo4034m.css';
import '../../css/m/mv30-1c_a.css';
import '../../css/j/jn1qofb9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hvyo4034m"/><path class="mv30-1c_a"/><path class="jn1qofb9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:cloud-desync"} {...others} />);
}

export default Component;
