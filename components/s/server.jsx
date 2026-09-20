import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jyh615bzz.css';
import '../../css/n/n4acc3bci.css';
import '../../css/m/mx6yo8buj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jyh615bzz"/><rect class="n4acc3bci"/><path class="mx6yo8buj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:server"} {...others} />);
}

export default Component;
