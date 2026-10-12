import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iadv2dkza.css';
import '../../css/g/gq9g_nbqu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iadv2dkza"/><path class="gq9g_nbqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:repeat-one"} {...others} />);
}

export default Component;
