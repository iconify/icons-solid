import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmlpbrb-y.css';
import '../../css/p/pu7grmbmu.css';
import '../../css/x/xvnjn7ufi.css';
import '../../css/v/vs_shhbnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nmlpbrb-y"/><path class="pu7grmbmu"/><path class="xvnjn7ufi"/><path class="vs_shhbnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:shopping-cart-upload-2"} {...others} />);
}

export default Component;
