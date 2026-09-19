import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/be4k6xb6p.css';
import '../../css/b/b8-2s2b6v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="be4k6xb6p"/><path class="b8-2s2b6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:qsp"} {...others} />);
}

export default Component;
