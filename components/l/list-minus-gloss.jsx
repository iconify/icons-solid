import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ug433ib-i.css';
import '../../css/c/cydd43dkj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="ug433ib-i wm-k"/><path class="cydd43dkj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-minus-gloss"} {...others} />);
}

export default Component;
