import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aybn5c93x.css';
import '../../css/n/n9vlmnvbi.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="aybn5c93x"/><path class="n9vlmnvbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ua"} {...others} />);
}

export default Component;
