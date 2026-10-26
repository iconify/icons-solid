import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/e/e4_nobb6z.css';
import '../../css/u/un4dkcxsq.css';
import '../../css/t/twvj-acfu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="e4_nobb6z"/><path class="un4dkcxsq"/><path class="twvj-acfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:candy-cane"} {...others} />);
}

export default Component;
