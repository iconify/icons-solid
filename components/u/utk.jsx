import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/erjl8ebwk.css';
import '../../css/n/ntpkn0b5z.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="erjl8ebwk"/><path class="ntpkn0b5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:utk"} {...others} />);
}

export default Component;
