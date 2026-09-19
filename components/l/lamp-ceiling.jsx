import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k59vwbc7q.css';
import '../../css/o/o4lci2bal.css';
import '../../css/c/c66j5y1jh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k59vwbc7q"/><path class="o4lci2bal"/><path class="c66j5y1jh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lamp-ceiling"} {...others} />);
}

export default Component;
