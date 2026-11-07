import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/odo4tjbjr.css';
import '../../css/u/uyzd90bnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="odo4tjbjr"/><path class="uyzd90bnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quote-broken"} {...others} />);
}

export default Component;
