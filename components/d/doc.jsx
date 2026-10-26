import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/x/x-t5wohaj.css';
import '../../css/f/fkz9d-8gw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="x-t5wohaj"/><path class="fkz9d-8gw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:doc"} {...others} />);
}

export default Component;
