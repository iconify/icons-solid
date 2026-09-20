import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kt5wyebru.css';
import '../../css/g/gnx2n8d3e.css';
import '../../css/g/gio48fbub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kt5wyebru"/><path class="gnx2n8d3e"/><path class="gio48fbub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:unicorn-head"} {...others} />);
}

export default Component;
