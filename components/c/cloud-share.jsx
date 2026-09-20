import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/be3kghlmz.css';
import '../../css/t/thmgj9bfy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="be3kghlmz"/><path class="thmgj9bfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:cloud-share"} {...others} />);
}

export default Component;
