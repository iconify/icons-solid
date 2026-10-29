import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zdf_qgggs.css';
import '../../css/n/nnj7subgs.css';
import '../../css/b/b_890b6ez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="zdf_qgggs"/><path class="nnj7subgs wm-a"/><path class="b_890b6ez wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bomb-solid"} {...others} />);
}

export default Component;
