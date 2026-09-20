import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a_6hqwexs.css';
import '../../css/l/le_a7s62z.css';
import '../../css/f/fqp2h7ofc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="a_6hqwexs"/><path class="le_a7s62z"/><path class="fqp2h7ofc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:user-circle-single"} {...others} />);
}

export default Component;
