import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prfbtzbda.css';
import '../../css/d/dehze7bnb.css';
import '../../css/f/ffnm4gbjj.css';
import '../../css/f/fj4g4tbjd.css';
import '../../css/s/s493bkb7m.css';
import '../../css/p/pprofqc6q.css';
import '../../css/y/yutxq9-2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="prfbtzbda"/><path class="dehze7bnb"/><path class="ffnm4gbjj"/><path class="fj4g4tbjd"/><path class="s493bkb7m"/><path class="pprofqc6q"/><path class="yutxq9-2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:mobile-phone-song-music-note"} {...others} />);
}

export default Component;
