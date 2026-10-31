import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ylbg4lbgu.css';
import '../../css/w/wmz1ufbjp.css';
import '../../css/h/hb69zybad.css';
import '../../css/d/d_68lyxlo.css';
import '../../css/n/nlns1abjw.css';
import '../../css/w/wknnd4qxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow ylbg4lbgu"/><path class="wmz1ufbjp"/><path class="hb69zybad"/><path class="d_68lyxlo"/><path class="nlns1abjw"/><path class="wknnd4qxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:folders"} {...others} />);
}

export default Component;
