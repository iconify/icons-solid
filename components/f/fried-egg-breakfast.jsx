import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gq-cnebof.css';
import '../../css/d/den8tnbku.css';
import '../../css/u/uztgjzbkg.css';
import '../../css/w/wwxponb6w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gq-cnebof"/><path class="den8tnbku"/><path class="uztgjzbkg"/><path class="wwxponb6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:fried-egg-breakfast"} {...others} />);
}

export default Component;
