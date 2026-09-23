import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wkzrmibkf.css';
import '../../css/o/okp94mb3v.css';
import '../../css/t/tv7polb_o.css';
import '../../css/y/yfmf3s9ul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wkzrmibkf"/><path class="okp94mb3v"/><path class="tv7polb_o"/><path class="yfmf3s9ul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-line-sparkles-duotone"} {...others} />);
}

export default Component;
