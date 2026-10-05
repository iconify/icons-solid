import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/o/o4d4euk0x.css';
import '../../css/c/cihnvjj0v.css';
import '../../css/c/cnj4nbc1z.css';
import '../../css/a/a5okeqbkx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="o4d4euk0x"/><path class="cihnvjj0v"/><path class="cnj4nbc1z"/><path class="a5okeqbkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:scissors"} {...others} />);
}

export default Component;
