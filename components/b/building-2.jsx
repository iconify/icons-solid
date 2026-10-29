import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/ptlgm_dfx.css';
import '../../css/i/i9qc_ccyw.css';
import '../../css/w/wevb6ybjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ptlgm_dfx"/><path class="i9qc_ccyw"/><path class="wevb6ybjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:building-2"} {...others} />);
}

export default Component;
