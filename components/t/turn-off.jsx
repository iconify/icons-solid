import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lj10p5rzw.css';
import '../../css/w/wuaul2ctt.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="lj10p5rzw"/><path class="wuaul2ctt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:turn-off"} {...others} />);
}

export default Component;
