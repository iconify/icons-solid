import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/d/dbewce8vc.css';
import '../../css/n/n6chi_btj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="dbewce8vc"/><path class="n6chi_btj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:scroll"} {...others} />);
}

export default Component;
