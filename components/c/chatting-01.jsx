import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/uslx3w3ok.css';
import '../../css/v/v4b9bksfe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="uslx3w3ok"/><path class="v4b9bksfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chatting-01"} {...others} />);
}

export default Component;
