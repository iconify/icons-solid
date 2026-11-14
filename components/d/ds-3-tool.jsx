import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j15migwcq.css';
import '../../css/h/hwng2kb6y.css';
import '../../css/j/j2qdvjbwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="j15migwcq"/><path class="hwng2kb6y"/><path class="j2qdvjbwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ds-3-tool"} {...others} />);
}

export default Component;
