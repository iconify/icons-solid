import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mq3tvbcci.css';
import '../../css/t/tduknvbih.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="mq3tvbcci"/><path class="tduknvbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:clipboard-heart-fill"} {...others} />);
}

export default Component;
