import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b_cic_b5b.css';
import '../../css/q/qlzn1idjj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="b_cic_b5b"/><path class="qlzn1idjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ardr"} {...others} />);
}

export default Component;
