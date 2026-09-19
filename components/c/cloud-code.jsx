import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1s4wrwpj.css';
import '../../css/v/vxlj3n_ms.css';
import '../../css/q/qe0qbnbcx.css';
import '../../css/f/fd0daibph.css';
import '../../css/z/z8y54-xyl.css';
import '../../css/v/vl-s-5bnp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r1s4wrwpj"/><path class="vxlj3n_ms"/><path class="qe0qbnbcx"/><path class="fd0daibph"/><path class="z8y54-xyl"/><path class="vl-s-5bnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-code"} {...others} />);
}

export default Component;
