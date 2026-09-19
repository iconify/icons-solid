import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f0an35byo.css';
import '../../css/s/sshg5eakp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f0an35byo"/><path class="sshg5eakp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:calendar-check-in-01"} {...others} />);
}

export default Component;
