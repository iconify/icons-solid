import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/j697w45kf.css';
import '../../css/y/ykbn6bzmo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="j697w45kf"/><path class="ykbn6bzmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:phone"} {...others} />);
}

export default Component;
