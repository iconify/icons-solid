import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ga7c6dhje.css';
import '../../css/o/o3r-au_2v.css';
import '../../css/j/jgsx0zbkw.css';
import '../../css/n/nwhrt_ieq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ga7c6dhje"/><path class="o3r-au_2v"/><path class="jgsx0zbkw"/><path class="nwhrt_ieq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:send-email-envelope"} {...others} />);
}

export default Component;
