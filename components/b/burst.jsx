import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c6mrdvbeg.css';
import '../../css/k/kvl-yeb9p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="c6mrdvbeg"/><path class="kvl-yeb9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:burst"} {...others} />);
}

export default Component;
