import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vxiausr2q.css';
import '../../css/n/n34_73bhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vxiausr2q"/><path class="n34_73bhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shopping-advertising-audience-targer-user"} {...others} />);
}

export default Component;
