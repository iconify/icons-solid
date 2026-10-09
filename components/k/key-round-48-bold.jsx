import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2oawlg-q.css';
import '../../css/z/z7_88imtg.css';
import '../../css/z/zbidebcoj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j2oawlg-q"/><path class="z7_88imtg"/><path class="zbidebcoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:key-round-48-bold"} {...others} />);
}

export default Component;
