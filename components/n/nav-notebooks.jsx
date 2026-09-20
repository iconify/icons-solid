import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am_4qubdp.css';
import '../../css/l/l70u19-fs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="am_4qubdp"/><path class="l70u19-fs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:nav-notebooks"} {...others} />);
}

export default Component;
