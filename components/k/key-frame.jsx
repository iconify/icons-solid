import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/he98dze-z.css';
import '../../css/o/o4zs0cbxj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="he98dze-z"/><path class="o4zs0cbxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:key-frame"} {...others} />);
}

export default Component;
