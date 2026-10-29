import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c4a9_ccmq.css';
import '../../css/m/m2rwd32ir.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c4a9_ccmq"/><path class="m2rwd32ir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:shopping-bag"} {...others} />);
}

export default Component;
