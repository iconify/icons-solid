import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/l/lbsc7q7-t.css';
import '../../css/h/h8kmhmbrs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="lbsc7q7-t"/><path class="h8kmhmbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:volume-2-outline"} {...others} />);
}

export default Component;
