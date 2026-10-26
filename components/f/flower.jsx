import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/w/w-ga42vhg.css';
import '../../css/i/iyd-mt7sj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="w-ga42vhg"/><path class="iyd-mt7sj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:flower"} {...others} />);
}

export default Component;
