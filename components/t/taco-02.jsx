import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jbeyhdbgx.css';
import '../../css/b/b6av4g9_k.css';
import '../../css/t/tc7ww-woh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jbeyhdbgx"/><path class="b6av4g9_k"/><path class="tc7ww-woh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:taco-02"} {...others} />);
}

export default Component;
