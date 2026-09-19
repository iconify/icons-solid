import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p5yua1bwn.css';
import '../../css/t/t5ew0tu8l.css';
import '../../css/h/hpz3uft5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p5yua1bwn"/><path class="t5ew0tu8l"/><path class="hpz3uft5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:drag-left-02"} {...others} />);
}

export default Component;
