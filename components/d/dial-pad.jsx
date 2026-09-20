import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n0mk15-cf.css';
import '../../css/o/on1q1bazu.css';
import '../../css/y/yoj5lcb4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n0mk15-cf"/><path class="on1q1bazu"/><path class="yoj5lcb4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:dial-pad"} {...others} />);
}

export default Component;
