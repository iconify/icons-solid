import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt8tgqbxx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xf0e2vbwp.css';
import '../../css/z/znm-30slm.css';
import '../../css/a/ao6arwbio.css';
import '../../css/j/ja4lbtblf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rt8tgqbxx secondary"/><g class="dt0cm9dhy primary"><path class="xf0e2vbwp"/><path class="znm-30slm"/><path class="ao6arwbio"/><path class="ja4lbtblf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zodiac-cancer-duo"} {...others} />);
}

export default Component;
