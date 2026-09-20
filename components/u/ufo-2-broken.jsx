import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o7wq5ibyr.css';
import '../../css/n/nwzl3abzk.css';
import '../../css/j/jo3znfb0x.css';
import '../../css/y/y-na78bap.css';
import '../../css/e/ekt69dbzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="o7wq5ibyr"/><path class="nwzl3abzk"/><path class="jo3znfb0x"/><path class="y-na78bap"/><path class="ekt69dbzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-2-broken"} {...others} />);
}

export default Component;
