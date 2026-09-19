import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i4c7z3ber.css';
import '../../css/g/gyo3mhbbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lamp-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="i4c7z3ber"/><path class="gyo3mhbbj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:lamp-outline"} {...others} />);
}

export default Component;
