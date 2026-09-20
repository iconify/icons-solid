import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fcukncbyk.css';
import '../../css/c/cfks_qbhw.css';
import '../../css/g/gqy199pev.css';
import '../../css/i/il7u957jt.css';
import '../../css/g/gh906bbyz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="fcukncbyk"/><path class="cfks_qbhw"/><path class="gqy199pev"/><path class="il7u957jt"/><path class="gh906bbyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:office-worker"} {...others} />);
}

export default Component;
