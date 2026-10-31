import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1xiqqxwq.css';
import '../../css/u/uiavscbxc.css';
import '../../css/p/p_qrzz42h.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="m1xiqqxwq"/><path class="uiavscbxc"/><path class="p_qrzz42h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:pakistan"} {...others} />);
}

export default Component;
