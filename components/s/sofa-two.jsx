import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ni8vhmowy.css';
import '../../css/y/y70606bue.css';
import '../../css/d/d-7iqjt6o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ni8vhmowy"/><path class="y70606bue"/><path clip-rule="evenodd" class="d-7iqjt6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sofa-two"} {...others} />);
}

export default Component;
