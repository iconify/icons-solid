import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sufz8mblh.css';
import '../../css/j/jytf-xlsy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="sufz8mblh"/><path class="jytf-xlsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:mcap"} {...others} />);
}

export default Component;
