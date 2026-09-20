import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ut0l4vbpa.css';
import '../../css/d/dzsjbobza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ut0l4vbpa"/><path class="dzsjbobza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-badoo"} {...others} />);
}

export default Component;
