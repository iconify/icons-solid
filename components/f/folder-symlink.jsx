import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utu_o_b1a.css';
import '../../css/h/hh8n-9avm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="utu_o_b1a"/><path class="hh8n-9avm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-symlink"} {...others} />);
}

export default Component;
