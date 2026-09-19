import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/txo_yebkp.css';
import '../../css/x/xamvsrmkn.css';
import '../../css/e/egy9gizwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="txo_yebkp"/><circle class="xamvsrmkn"/><path class="egy9gizwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:voicemail"} {...others} />);
}

export default Component;
