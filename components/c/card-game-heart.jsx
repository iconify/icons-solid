import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wjf98zb5s.css';
import '../../css/y/yxh5m4ihj.css';
import '../../css/k/kxhhbdb1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wjf98zb5s"/><path class="yxh5m4ihj"/><path class="kxhhbdb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:card-game-heart"} {...others} />);
}

export default Component;
