import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/dmnptj-2l.css';
import '../../css/c/come3gqds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="dmnptj-2l"/><path class="come3gqds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:line"} {...others} />);
}

export default Component;
