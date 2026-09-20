import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/ws-x7156w.css';
import '../../css/o/ox_z3wb3f.css';
import '../../css/r/r2w7r7b1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ws-x7156w"/><path class="ox_z3wb3f"/><path class="r2w7r7b1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:power-outlet-type-b"} {...others} />);
}

export default Component;
