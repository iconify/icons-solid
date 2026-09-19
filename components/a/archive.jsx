import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/l/l_jvi_-3i.css';
import '../../css/y/yclr26l0t.css';
import '../../css/t/tovsduesy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="l_jvi_-3i"/><path class="yclr26l0t"/><path class="tovsduesy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:archive"} {...others} />);
}

export default Component;
