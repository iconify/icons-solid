import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w4j7qorhv.css';
import '../../css/g/gzjgc_t0q.css';
import '../../css/a/alu6i0_jj.css';
import '../../css/q/q5lasnb7b.css';
import '../../css/r/rw8hl94tg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="w4j7qorhv"/><path class="gzjgc_t0q"/><path class="alu6i0_jj"/><path class="q5lasnb7b"/><path class="rw8hl94tg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-2-line-duotone"} {...others} />);
}

export default Component;
