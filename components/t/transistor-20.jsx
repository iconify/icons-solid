import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6f2kgb8d.css';
import '../../css/z/zd03hic5e.css';
import '../../css/f/frzwfx42e.css';
import '../../css/r/rl4r9ofhj.css';
import '../../css/w/wugkd2rdg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o6f2kgb8d"/><path class="zd03hic5e"/><path class="frzwfx42e"/><path class="rl4r9ofhj"/><path class="wugkd2rdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transistor-20"} {...others} />);
}

export default Component;
