import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijntuqgut.css';
import '../../css/j/jn_5ilyzq.css';
import '../../css/m/mtqm29b0c.css';
import '../../css/n/ncn4mgmjm.css';
import '../../css/g/g3o4iohfd.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ijntuqgut"/><path class="jn_5ilyzq"/><path class="mtqm29b0c"/><path class="ncn4mgmjm"/><path class="g3o4iohfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:webgpu"} {...others} />);
}

export default Component;
