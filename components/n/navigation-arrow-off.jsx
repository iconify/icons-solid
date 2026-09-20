import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/k8pvvxb7n.css';
import '../../css/l/la0-jxkpj.css';
import '../../css/p/pc9orgmht.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="k8pvvxb7n"/><path class="la0-jxkpj"/><path class="pc9orgmht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:navigation-arrow-off"} {...others} />);
}

export default Component;
