import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lebs4-4vj.css';
import '../../css/s/s3l7hccao.css';
import '../../css/b/b47kzjxvo.css';
import '../../css/l/lhfg0jbib.css';
import '../../css/g/g1jcfcb3s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="lebs4-4vj"/><path class="s3l7hccao"/><path class="b47kzjxvo"/><path class="lhfg0jbib"/><path class="g1jcfcb3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:cleaning-room-woman"} {...others} />);
}

export default Component;
