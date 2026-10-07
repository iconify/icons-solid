import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kf3y1edrs.css';
import '../../css/w/wzh4t-1xg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kf3y1edrs"/><path class="wzh4t-1xg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:cart"} {...others} />);
}

export default Component;
