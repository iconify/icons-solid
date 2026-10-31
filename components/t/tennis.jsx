import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tluxxvblp.css';
import '../../css/f/fe50rmbaz.css';
import '../../css/n/nnixupllg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tluxxvblp"/><path class="fe50rmbaz wm-k"/><path class="nnixupllg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:tennis"} {...others} />);
}

export default Component;
