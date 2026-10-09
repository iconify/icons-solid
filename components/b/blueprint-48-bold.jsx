import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyts_6b4x.css';
import '../../css/f/fu4k6tlst.css';
import '../../css/x/xpbh4hvld.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kyts_6b4x"/><path class="fu4k6tlst"/><path class="xpbh4hvld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blueprint-48-bold"} {...others} />);
}

export default Component;
