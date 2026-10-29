import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y3iqnh3-m.css';
import '../../css/d/div5rtbve.css';
import '../../css/h/humbaqb4e.css';
import '../../css/q/qh7h3nbxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k y3iqnh3-m"/><path class="div5rtbve wm-k"/><path class="humbaqb4e wm-k"/><path class="qh7h3nbxd wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:at-sign"} {...others} />);
}

export default Component;
