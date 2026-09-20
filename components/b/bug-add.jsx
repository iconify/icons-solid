import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhhwblbuq.css';
import '../../css/h/hnk5v_9zk.css';
import '../../css/f/fim_63bgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hhhwblbuq"/><path class="hnk5v_9zk"/><path class="fim_63bgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:bug-add"} {...others} />);
}

export default Component;
