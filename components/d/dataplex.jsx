import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t_ev7s-sv.css';
import '../../css/c/c7hthnbyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="bi12bsetm"><path class="t_ev7s-sv"/><path class="c7hthnbyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:dataplex"} {...others} />);
}

export default Component;
