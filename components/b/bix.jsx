import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ir4y4fk6l.css';
import '../../css/b/blxps4bai.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ir4y4fk6l"/><path class="blxps4bai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:bix"} {...others} />);
}

export default Component;
