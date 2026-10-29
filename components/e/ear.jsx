import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whudv4qtl.css';
import '../../css/g/gjtf2aciz.css';
import '../../css/a/arhlc5b6j.css';
import '../../css/y/yzwwgzbzt.css';
import '../../css/j/jh5608gim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="whudv4qtl wm-k"/><path class="gjtf2aciz wm-k"/><path class="arhlc5b6j wm-k"/><path class="wm-shine yzwwgzbzt"/><path class="jh5608gim wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:ear"} {...others} />);
}

export default Component;
