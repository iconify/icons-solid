import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhxi-trnl.css';
import '../../css/q/qv9zyob3j.css';
import '../../css/n/nol19vq4t.css';
import '../../css/g/g7a-xgufn.css';
import '../../css/h/hzapyruls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="jhxi-trnl"/><path class="qv9zyob3j"/><circle class="nol19vq4t"/><path class="g7a-xgufn"/><circle class="hzapyruls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:circuit-board"} {...others} />);
}

export default Component;
