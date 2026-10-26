import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/i/iom06ubvw.css';
import '../../css/h/hocchnbix.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="iom06ubvw"/><path class="hocchnbix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:ring"} {...others} />);
}

export default Component;
