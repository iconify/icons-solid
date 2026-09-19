import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/s/szxzcsbwd.css';
import '../../css/v/vqwn2n25w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="szxzcsbwd"/><circle class="vqwn2n25w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:humbleicon"} {...others} />);
}

export default Component;
