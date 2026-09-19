import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s7qxfdbrb.css';
import '../../css/h/hwsal5q-o.css';
import '../../css/z/ze6eu2fom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="s7qxfdbrb"/><circle class="hwsal5q-o"/><path class="ze6eu2fom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:hand-brake"} {...others} />);
}

export default Component;
