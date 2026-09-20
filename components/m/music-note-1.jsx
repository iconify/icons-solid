import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fztf4_b3u.css';
import '../../css/z/zrzfwr93i.css';
import '../../css/h/hk6l5t8db.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fztf4_b3u"/><path class="zrzfwr93i"/><path class="hk6l5t8db"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:music-note-1"} {...others} />);
}

export default Component;
