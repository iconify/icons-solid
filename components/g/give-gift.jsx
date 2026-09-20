import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yamq3pbce.css';
import '../../css/j/jad-uuxvw.css';
import '../../css/b/b79v5gbqh.css';
import '../../css/w/wh6ci6sci.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="yamq3pbce"/><path class="jad-uuxvw"/><path class="b79v5gbqh"/><path class="wh6ci6sci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:give-gift"} {...others} />);
}

export default Component;
