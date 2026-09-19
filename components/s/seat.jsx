import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/lrqwqdbew.css';
import '../../css/p/pd5_1mzss.css';
import '../../css/r/r8r7mgbbj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="lrqwqdbew"/><path class="pd5_1mzss"/><circle class="r8r7mgbbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:seat"} {...others} />);
}

export default Component;
