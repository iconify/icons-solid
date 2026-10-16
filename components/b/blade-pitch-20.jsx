import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8833_-nr.css';
import '../../css/g/gwws77byj.css';
import '../../css/h/hjobm6b7k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q8833_-nr"/><path class="gwws77byj"/><path class="hjobm6b7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blade-pitch-20"} {...others} />);
}

export default Component;
