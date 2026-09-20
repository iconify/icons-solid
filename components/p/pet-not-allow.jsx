import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tnmcah3qw.css';
import '../../css/k/k-gh2xbah.css';
import '../../css/k/knarswbkq.css';
import '../../css/w/wxsg-bctg.css';
import '../../css/f/f-yb08b1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tnmcah3qw"/><path class="k-gh2xbah"/><path class="knarswbkq"/><path class="wxsg-bctg"/><path class="f-yb08b1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:pet-not-allow"} {...others} />);
}

export default Component;
