import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/tp-9_4bnw.css';
import '../../css/l/lk0790qnt.css';
import '../../css/c/cnj4nbc1z.css';
import '../../css/a/a5okeqbkx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="tp-9_4bnw"/><path class="lk0790qnt"/><path class="cnj4nbc1z"/><path class="a5okeqbkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:scissors"} {...others} />);
}

export default Component;
