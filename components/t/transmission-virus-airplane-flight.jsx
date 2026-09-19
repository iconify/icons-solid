import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aq70vib7l.css';
import '../../css/a/aynsz14nk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aq70vib7l"/><path class="aynsz14nk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:transmission-virus-airplane-flight"} {...others} />);
}

export default Component;
