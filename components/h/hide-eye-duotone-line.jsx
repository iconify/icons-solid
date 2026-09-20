import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/o/ojg8e410h.css';
import '../../css/w/w5-c7ob8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><path class="ojg8e410h"/><path class="w5-c7ob8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:hide-eye-duotone-line"} {...others} />);
}

export default Component;
