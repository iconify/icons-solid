import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/h/hgo4xbbla.css';
import '../../css/y/y2rw57byo.css';
import '../../css/d/dsak2k1zd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="hgo4xbbla"/><path class="y2rw57byo"/><path class="dsak2k1zd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:memes-comment-reply"} {...others} />);
}

export default Component;
