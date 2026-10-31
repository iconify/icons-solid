import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cul1c6h3i.css';
import '../../css/f/fs4phm_cn.css';
import '../../css/y/y7itsdbdv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cul1c6h3i"/><path class="fs4phm_cn"/><path class="y7itsdbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:coding-file-2-pop"} {...others} />);
}

export default Component;
