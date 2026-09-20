import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xmgydcc1j.css';
import '../../css/a/adei87vxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xmgydcc1j"/><path class="adei87vxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:revote-linear"} {...others} />);
}

export default Component;
