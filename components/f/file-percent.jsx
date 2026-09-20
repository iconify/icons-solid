import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nxk_2_bfm.css';
import '../../css/w/wff73cbin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nxk_2_bfm"/><path class="wff73cbin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-percent"} {...others} />);
}

export default Component;
