import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/srv0tukcb.css';
import '../../css/n/nr2d1sfxq.css';
import '../../css/q/q_gsde7ku.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="srv0tukcb"/><path class="nr2d1sfxq"/><path class="q_gsde7ku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:division-circle"} {...others} />);
}

export default Component;
