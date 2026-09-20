import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/i/iu6f4fumb.css';
import '../../css/z/zs-5weoak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><circle class="iu6f4fumb"/><path class="zs-5weoak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:key-duotone-line"} {...others} />);
}

export default Component;
