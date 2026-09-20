import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/d/d56jn-bzy.css';
import '../../css/o/or0j-mbfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><path class="d56jn-bzy"/><path class="or0j-mbfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:line-duotone"} {...others} />);
}

export default Component;
