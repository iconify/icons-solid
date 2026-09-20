import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hmyn2cb-f.css';
import '../../css/z/zs13s_bpz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hmyn2cb-f"/><circle class="zs13s_bpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-clock"} {...others} />);
}

export default Component;
