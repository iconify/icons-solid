import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kunhnfbwj.css';
import '../../css/k/k-5cbg9fe.css';
import '../../css/k/kefqzgbrr.css';
import '../../css/n/npbwhkbqr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="kunhnfbwj"/><path class="k-5cbg9fe"/><path class="kefqzgbrr"/><path class="npbwhkbqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:flashlight"} {...others} />);
}

export default Component;
