import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0ngfncmh.css';
import '../../css/l/l9u4owb-d.css';
import '../../css/d/d71p-zbmb.css';
import '../../css/m/m_zaqjbhy.css';
import '../../css/l/lgpqvlbad.css';
import '../../css/r/rqzpguciz.css';
import '../../css/y/y4-g61b7y.css';
import '../../css/b/bgg336x1x.css';
import '../../css/u/uk1yzyy9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j0ngfncmh"/><path class="l9u4owb-d"/><path class="d71p-zbmb"/><path class="m_zaqjbhy"/><path class="lgpqvlbad"/><path class="rqzpguciz"/><path class="y4-g61b7y"/><path class="bgg336x1x"/><path class="uk1yzyy9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-play-vertical-bold"} {...others} />);
}

export default Component;
