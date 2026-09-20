import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t-sxzjbcb.css';
import '../../css/z/z41w4vbvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t-sxzjbcb"/><circle class="z41w4vbvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-dot"} {...others} />);
}

export default Component;
