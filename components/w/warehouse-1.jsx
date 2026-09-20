import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/aljalff2e.css';
import '../../css/x/xjr89zdih.css';
import '../../css/p/phonlrb3m.css';
import '../../css/r/rmp05eb4e.css';
import '../../css/w/w9psarbxw.css';
import '../../css/v/v0zykjb8q.css';
import '../../css/k/k3lg4nh-h.css';
import '../../css/g/gb2xts5ua.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="aljalff2e"/><path class="xjr89zdih"/><path class="phonlrb3m"/><path class="rmp05eb4e"/><path class="w9psarbxw"/><path class="v0zykjb8q"/><path class="k3lg4nh-h"/><path class="gb2xts5ua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:warehouse-1"} {...others} />);
}

export default Component;
