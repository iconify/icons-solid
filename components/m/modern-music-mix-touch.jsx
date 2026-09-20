import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqucqh5gk.css';
import '../../css/n/ns76v76mv.css';
import '../../css/p/p98nyhb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xqucqh5gk"/><path class="ns76v76mv"/><path class="p98nyhb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:modern-music-mix-touch"} {...others} />);
}

export default Component;
