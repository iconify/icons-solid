import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/x/x0g6c5tyf.css';
import '../../css/v/vj0xopb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="x0g6c5tyf"/><path class="vj0xopb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:arrows"} {...others} />);
}

export default Component;
