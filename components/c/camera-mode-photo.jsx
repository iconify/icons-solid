import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pmt5d56mi.css';
import '../../css/h/hs5-acbpc.css';
import '../../css/y/y64_-73hw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="pmt5d56mi"/><path class="hs5-acbpc"/><path class="y64_-73hw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:camera-mode-photo"} {...others} />);
}

export default Component;
