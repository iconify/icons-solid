import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afub65bxw.css';
import '../../css/k/kfsq47nik.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="afub65bxw"/><path class="kfsq47nik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:terminal-window-stroke-20"} {...others} />);
}

export default Component;
