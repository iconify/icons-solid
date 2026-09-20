import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gczf6hboe.css';
import '../../css/m/m-s7vzbkn.css';
import '../../css/f/f-du83bit.css';
import '../../css/f/fmf_2ccuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="gczf6hboe"/><path class="m-s7vzbkn"/><path class="f-du83bit"/><path class="fmf_2ccuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:wifi-monitor-1"} {...others} />);
}

export default Component;
