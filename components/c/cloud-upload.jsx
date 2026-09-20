import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o90ey1bfa.css';
import '../../css/l/lzv3bwb-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o90ey1bfa"/><path class="lzv3bwb-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:cloud-upload"} {...others} />);
}

export default Component;
