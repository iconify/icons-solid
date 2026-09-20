import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mbwzttd-l.css';
import '../../css/o/odf1d5b7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mbwzttd-l"/><path class="odf1d5b7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:watch"} {...others} />);
}

export default Component;
