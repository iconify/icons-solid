import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cl5cx4bic.css';
import '../../css/s/sb5-xofsm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cl5cx4bic"/><path class="sb5-xofsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:msg-smile"} {...others} />);
}

export default Component;
