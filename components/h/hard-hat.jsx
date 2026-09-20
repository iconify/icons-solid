import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z3kbpg3jy.css';
import '../../css/j/jrc5o1v2l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z3kbpg3jy"/><rect class="jrc5o1v2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hard-hat"} {...others} />);
}

export default Component;
