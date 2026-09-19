import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f0wc88mbl.css';
import '../../css/x/xd1esxbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f0wc88mbl"/><path class="xd1esxbpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bed"} {...others} />);
}

export default Component;
