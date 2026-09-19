import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n9yk9vboc.css';
import '../../css/l/luekbq2pr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="n9yk9vboc"/><path class="luekbq2pr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:evx"} {...others} />);
}

export default Component;
