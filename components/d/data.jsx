import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s8127tbcg.css';
import '../../css/z/zs_6eoz4a.css';
import '../../css/p/pru82pbqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><ellipse class="s8127tbcg"/><path class="zs_6eoz4a"/><path class="pru82pbqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:data"} {...others} />);
}

export default Component;
