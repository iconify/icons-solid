import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vu7pc9bti.css';
import '../../css/d/dos_yhbgg.css';
import '../../css/d/dqapyabwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vu7pc9bti"/><circle class="dos_yhbgg"/><circle class="dqapyabwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:music-4"} {...others} />);
}

export default Component;
