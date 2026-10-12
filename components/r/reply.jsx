import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i3srbpbkt.css';
import '../../css/f/fgw7om73g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i3srbpbkt"/><path class="fgw7om73g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:reply"} {...others} />);
}

export default Component;
