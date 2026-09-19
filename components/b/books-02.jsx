import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zv5s0bcpd.css';
import '../../css/o/osw_11bnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zv5s0bcpd"/><path class="osw_11bnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:books-02"} {...others} />);
}

export default Component;
