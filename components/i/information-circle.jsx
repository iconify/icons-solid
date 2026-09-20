import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kylt39b5y.css';
import '../../css/y/yd630t_sn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="kylt39b5y"/><path class="yd630t_sn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:information-circle"} {...others} />);
}

export default Component;
