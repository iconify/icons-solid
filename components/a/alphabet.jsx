import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uoucunbjj.css';
import '../../css/m/m96jl0kxe.css';
import '../../css/w/w5cmb58jd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uoucunbjj"/><path class="m96jl0kxe"/><path class="w5cmb58jd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:alphabet"} {...others} />);
}

export default Component;
