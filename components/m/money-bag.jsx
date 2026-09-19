import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fiuzy_whq.css';
import '../../css/i/i5mj2xiuf.css';

const viewBox = {"width":32,"height":32};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="fiuzy_whq"/><path class="i5mj2xiuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:money-bag"} {...others} />);
}

export default Component;
