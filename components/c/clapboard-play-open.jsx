import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/w/wwlj7bbuo.css';
import '../../css/v/vn4zd9u6o.css';
import '../../css/t/t29hnlc6l.css';
import '../../css/r/riqiuobkj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="wwlj7bbuo"/><path class="vn4zd9u6o"/><path class="t29hnlc6l"/><path class="riqiuobkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:clapboard-play-open"} {...others} />);
}

export default Component;
