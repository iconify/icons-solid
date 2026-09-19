import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m61dqybvl.css';
import '../../css/n/n5taqgggh.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="m61dqybvl"/><path class="n5taqgggh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:unindent"} {...others} />);
}

export default Component;
