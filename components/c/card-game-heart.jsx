import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cx2ozab0r.css';
import '../../css/n/nhov-4bso.css';
import '../../css/k/kuwmsbc5t.css';
import '../../css/x/xmuhkbl-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cx2ozab0r"/><path class="nhov-4bso"/><path class="kuwmsbc5t"/><path class="xmuhkbl-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:card-game-heart"} {...others} />);
}

export default Component;
