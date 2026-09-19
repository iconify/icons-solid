import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f60r1bcpg.css';
import '../../css/c/cwe0vtbxg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="f60r1bcpg"/><path class="cwe0vtbxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:send-arrow-up-fill"} {...others} />);
}

export default Component;
