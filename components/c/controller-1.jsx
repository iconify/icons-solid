import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qxthw45-m.css';
import '../../css/t/thtvr2bpj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="qxthw45-m"/><path class="thtvr2bpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:controller-1"} {...others} />);
}

export default Component;
