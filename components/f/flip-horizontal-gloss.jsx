import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/udodwybqy.css';
import '../../css/g/gm8t2gz6r.css';
import '../../css/d/dasuh-jyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="udodwybqy wm-k"/><path class="gm8t2gz6r wm-a"/><path class="dasuh-jyt wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flip-horizontal-gloss"} {...others} />);
}

export default Component;
