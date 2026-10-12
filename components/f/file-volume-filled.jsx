import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj896_brl.css';
import '../../css/j/j22w93are.css';
import '../../css/q/qcswzebnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pj896_brl"/><path class="j22w93are"/><path class="qcswzebnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-volume-filled"} {...others} />);
}

export default Component;
