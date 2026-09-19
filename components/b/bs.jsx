import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sam6cytxx.css';
import '../../css/u/ubwiz66zy.css';
import '../../css/w/wiacdbgyj.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="sam6cytxx"/><path class="ubwiz66zy"/><path class="wiacdbgyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:bs"} {...others} />);
}

export default Component;
