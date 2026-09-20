import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/l/lh-9sbbli.css';
import '../../css/m/mezxv_whj.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="lh-9sbbli"/><path class="mezxv_whj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:revert"} {...others} />);
}

export default Component;
