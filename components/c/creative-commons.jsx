import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/ggamq8hbq.css';
import '../../css/d/d_yp3ma9d.css';
import '../../css/a/a3a7kvl8j.css';
import '../../css/d/dxt-_mbkn.css';
import '../../css/d/doki1jpre.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ggamq8hbq"/><path class="d_yp3ma9d"/><path class="a3a7kvl8j"/><path class="dxt-_mbkn"/><path class="doki1jpre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:creative-commons"} {...others} />);
}

export default Component;
