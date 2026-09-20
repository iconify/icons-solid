import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/ul00t9wsm.css';
import '../../css/q/q1abyqb5l.css';
import '../../css/h/hw4q3tb7t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ul00t9wsm"/><path class="q1abyqb5l"/><path class="hw4q3tb7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:dial-pad-finger-2"} {...others} />);
}

export default Component;
