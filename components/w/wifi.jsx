import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/ev_551b8w.css';
import '../../css/q/qrewj6b4l.css';
import '../../css/c/cs-jl1bwy.css';
import '../../css/a/a7s_b-m9q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ev_551b8w"/><path clip-rule="evenodd" class="qrewj6b4l"/><path class="cs-jl1bwy"/><path clip-rule="evenodd" class="a7s_b-m9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:wifi"} {...others} />);
}

export default Component;
