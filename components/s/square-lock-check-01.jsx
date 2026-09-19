import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/puzwzylem.css';
import '../../css/t/tk0yztb4f.css';
import '../../css/z/z-pb6vbbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="puzwzylem"/><path class="tk0yztb4f"/><path class="z-pb6vbbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-lock-check-01"} {...others} />);
}

export default Component;
