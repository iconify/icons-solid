import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z3i-i2btw.css';
import '../../css/z/za1_mqbkz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z3i-i2btw"/><path class="za1_mqbkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:pointer-hand"} {...others} />);
}

export default Component;
