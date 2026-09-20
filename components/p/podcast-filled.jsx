import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/exn_fx67o.css';
import '../../css/u/ujonfg6py.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="exn_fx67o"/><path class="ujonfg6py"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:podcast-filled"} {...others} />);
}

export default Component;
