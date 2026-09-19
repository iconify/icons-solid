import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/g/g2tgghbmg.css';
import '../../css/c/ck4uh6bni.css';
import '../../css/n/n308__4yo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="g2tgghbmg"/><path class="ck4uh6bni"/><path class="n308__4yo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:arrow-down-to-bracket-solid"} {...others} />);
}

export default Component;
