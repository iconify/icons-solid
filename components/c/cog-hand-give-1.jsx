import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr91a95mm.css';
import '../../css/v/vnosi4lpl.css';
import '../../css/f/fs43kkb8s.css';
import '../../css/s/synf3nb5u.css';
import '../../css/j/jh9jgm3kj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gr91a95mm"/><path class="vnosi4lpl"/><path class="fs43kkb8s"/><path class="synf3nb5u"/><path class="jh9jgm3kj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:cog-hand-give-1"} {...others} />);
}

export default Component;
