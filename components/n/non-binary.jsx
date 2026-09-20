import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p5vyhkbqc.css';
import '../../css/x/xu1251juh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p5vyhkbqc"/><circle class="xu1251juh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:non-binary"} {...others} />);
}

export default Component;
