import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wzu4c0bsi.css';
import '../../css/z/zf_z6v05p.css';
import '../../css/n/nqvv9lbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="wzu4c0bsi"/><circle class="zf_z6v05p"/><path class="nqvv9lbxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:music-02"} {...others} />);
}

export default Component;
