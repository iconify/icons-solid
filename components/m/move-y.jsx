import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/ki8yqbcwf.css';
import '../../css/v/vjbjg0b1y.css';
import '../../css/s/s-6ff4b-x.css';
import '../../css/n/n2651fbqx.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ki8yqbcwf"/><path class="vjbjg0b1y"/><path class="s-6ff4b-x"/><path class="n2651fbqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:move-y"} {...others} />);
}

export default Component;
