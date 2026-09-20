import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y3wl8gakq.css';
import '../../css/l/l-hpjac-w.css';
import '../../css/n/nlqdg2buc.css';
import '../../css/w/wfzv3ve_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y3wl8gakq"/><path class="l-hpjac-w"/><path class="nlqdg2buc"/><path class="wfzv3ve_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:behance-logo-1"} {...others} />);
}

export default Component;
