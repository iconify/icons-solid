import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/stzn1tb6p.css';
import '../../css/u/u0jy2c12v.css';
import '../../css/n/n8guz-bso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="stzn1tb6p"/><circle class="u0jy2c12v"/><path class="n8guz-bso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:msg-bubble-user-filled"} {...others} />);
}

export default Component;
