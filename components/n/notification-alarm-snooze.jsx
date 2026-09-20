import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh6tf2bky.css';
import '../../css/q/qg967ufrs.css';
import '../../css/g/gwy2ymbxd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vh6tf2bky"/><path class="qg967ufrs"/><path class="gwy2ymbxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:notification-alarm-snooze"} {...others} />);
}

export default Component;
