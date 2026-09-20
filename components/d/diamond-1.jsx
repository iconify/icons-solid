import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c1ykcdxxs.css';
import '../../css/d/d-pvs5dju.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="c1ykcdxxs"/><path class="d-pvs5dju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:diamond-1"} {...others} />);
}

export default Component;
