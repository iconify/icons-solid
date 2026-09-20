import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sgwsw-_rl.css';
import '../../css/d/dgnlnyb4l.css';
import '../../css/k/khbna04ud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sgwsw-_rl"/><path class="dgnlnyb4l"/><circle class="khbna04ud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:park"} {...others} />);
}

export default Component;
