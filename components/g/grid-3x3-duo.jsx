import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eirgzobiv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mie31z6an.css';
import '../../css/q/qnz8_nike.css';
import '../../css/d/d1akiylgq.css';
import '../../css/y/yg7y56b9u.css';
import '../../css/f/fh5b84bbb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eirgzobiv secondary"/><g class="dt0cm9dhy primary"><path class="mie31z6an"/><path class="qnz8_nike"/><path class="d1akiylgq"/><path class="yg7y56b9u"/><path class="fh5b84bbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:grid-3x3-duo"} {...others} />);
}

export default Component;
