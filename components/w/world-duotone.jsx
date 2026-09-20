import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/g/gsbwbdb1y.css';
import '../../css/y/yx-q3fo9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><circle class="gsbwbdb1y"/><path class="yx-q3fo9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:world-duotone"} {...others} />);
}

export default Component;
