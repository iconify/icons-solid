import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tjjvwxbzr.css';
import '../../css/k/kr-_g7bji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tjjvwxbzr"/><path class="kr-_g7bji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:table-shortcut"} {...others} />);
}

export default Component;
