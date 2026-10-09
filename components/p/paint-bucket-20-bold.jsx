import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ioqh6lbvj.css';
import '../../css/n/nhtywxbko.css';
import '../../css/q/qz4s_4byz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ioqh6lbvj"/><path class="nhtywxbko"/><path class="qz4s_4byz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:paint-bucket-20-bold"} {...others} />);
}

export default Component;
