import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yd5kv7bzs.css';
import '../../css/l/l6ieu0bax.css';
import '../../css/w/wsjfunbeo.css';
import '../../css/k/kn-b7qbkz.css';
import '../../css/u/ur8rfqbnk.css';
import '../../css/f/f-4nyac6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yd5kv7bzs"/><path class="l6ieu0bax"/><path class="wsjfunbeo"/><path class="kn-b7qbkz"/><path class="ur8rfqbnk"/><path class="f-4nyac6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:adobe-logo"} {...others} />);
}

export default Component;
