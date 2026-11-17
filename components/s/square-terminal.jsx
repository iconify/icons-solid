import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/b2s-rtbbj.css';
import '../../css/y/yu3no1o6h.css';
import '../../css/t/tj75_kssw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="b2s-rtbbj"/><path class="yu3no1o6h"/><path class="tj75_kssw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:square-terminal"} {...others} />);
}

export default Component;
