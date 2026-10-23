import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yfxj_iryg.css';
import '../../css/q/q9whx4slr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yfxj_iryg"/><path class="q9whx4slr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:tractor"} {...others} />);
}

export default Component;
