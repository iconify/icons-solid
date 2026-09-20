import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/c/cejwj-bns.css';
import '../../css/f/fc-lmubvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="cejwj-bns"/><path class="fc-lmubvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:resize-down-right"} {...others} />);
}

export default Component;
