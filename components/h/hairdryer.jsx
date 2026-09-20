import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z9edi6b_u.css';
import '../../css/d/dxfwjcayj.css';
import '../../css/d/dvs2mni1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="z9edi6b_u"/><path class="dxfwjcayj"/><path class="dvs2mni1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:hairdryer"} {...others} />);
}

export default Component;
