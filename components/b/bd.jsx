import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kb8catbth.css';
import '../../css/i/id1tjk8pm.css';

const viewBox = {"width":301,"height":181};
const content = `<g class="ft5dv1b6b"><path class="kb8catbth"/><circle class="id1tjk8pm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:bd"} {...others} />);
}

export default Component;
