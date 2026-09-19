import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jhcjl2b9u.css';
import '../../css/g/gagbfjb7h.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="jhcjl2b9u"/><path class="gagbfjb7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:usdt"} {...others} />);
}

export default Component;
