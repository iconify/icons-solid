import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fopi-dtzo.css';
import '../../css/m/mbp93tqub.css';
import '../../css/z/zkj8ox4xx.css';
import '../../css/w/wq9vu8bcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fopi-dtzo wm-k"/><path class="mbp93tqub wm-k"/><path class="wm-k zkj8ox4xx"/><path class="wm-shine wq9vu8bcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:activity"} {...others} />);
}

export default Component;
