import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vjnj9abfa.css';
import '../../css/d/d2umvjsxg.css';
import '../../css/y/yopadjb1x.css';
import '../../css/j/jhxi-trnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vjnj9abfa"/><circle class="d2umvjsxg"/><circle class="yopadjb1x"/><rect class="jhxi-trnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:scissors-square"} {...others} />);
}

export default Component;
