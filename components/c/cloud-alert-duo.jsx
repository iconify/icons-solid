import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ls85-kd-q.css';
import '../../css/g/g56b45b0x.css';
import '../../css/c/cvilh7buk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ls85-kd-q"/><path class="g56b45b0x wm-a"/><path class="cvilh7buk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-alert-duo"} {...others} />);
}

export default Component;
