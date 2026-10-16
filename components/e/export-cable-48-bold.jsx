import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tau-1emog.css';
import '../../css/n/no1zxzbso.css';
import '../../css/n/n23jidc0m.css';
import '../../css/e/equl3cbqk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tau-1emog"/><path class="no1zxzbso"/><path class="n23jidc0m"/><path class="equl3cbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:export-cable-48-bold"} {...others} />);
}

export default Component;
