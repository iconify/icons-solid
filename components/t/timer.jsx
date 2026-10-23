import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mr0ya4bou.css';
import '../../css/g/g4_6w77hr.css';
import '../../css/n/n8ny8e3ug.css';
import '../../css/t/tyi8o0bkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="mr0ya4bou"/><path class="g4_6w77hr"/><path class="n8ny8e3ug"/><path class="tyi8o0bkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:timer"} {...others} />);
}

export default Component;
