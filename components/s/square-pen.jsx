import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/teys5bbqy.css';
import '../../css/g/giz5jtgdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="teys5bbqy"/><path class="giz5jtgdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:square-pen"} {...others} />);
}

export default Component;
