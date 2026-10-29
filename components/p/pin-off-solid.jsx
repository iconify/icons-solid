import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c3id47bcu.css';
import '../../css/t/t9o2bbbrp.css';
import '../../css/a/aalr8-b6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="c3id47bcu"/><path class="t9o2bbbrp wm-a"/><path class="aalr8-b6s wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pin-off-solid"} {...others} />);
}

export default Component;
