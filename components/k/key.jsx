import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/r/r758nvbyz.css';
import '../../css/q/qolc7ujwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="r758nvbyz"/><path class="qolc7ujwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:key"} {...others} />);
}

export default Component;
