import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qo_rl6brd.css';
import '../../css/h/hwd4k5boz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qo_rl6brd"/><path class="hwd4k5boz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:restore"} {...others} />);
}

export default Component;
