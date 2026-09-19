import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/odac6qbib.css';
import '../../css/t/tfn-km_fs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="odac6qbib"/><path class="tfn-km_fs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-tree"} {...others} />);
}

export default Component;
