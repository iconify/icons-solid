import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ymsmzlb1y.css';
import '../../css/e/ecu98ubys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ymsmzlb1y"/><path class="ecu98ubys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:record-player"} {...others} />);
}

export default Component;
