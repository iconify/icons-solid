import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/z0mjl28oo.css';
import '../../css/a/aeqfs_bpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="z0mjl28oo"/><path class="aeqfs_bpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-eraser"} {...others} />);
}

export default Component;
