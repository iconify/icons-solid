import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvy3fkxog.css';
import '../../css/s/svvhpabms.css';
import '../../css/e/ewyunfb7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="qvy3fkxog"/><path class="svvhpabms wm-a"/><path class="ewyunfb7m wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shower-head-solid"} {...others} />);
}

export default Component;
