import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clyynnbbx.css';
import '../../css/z/z-nk8wbnr.css';
import '../../css/x/xy4cuobbh.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="clyynnbbx"/><path class="z-nk8wbnr"/><path class="xy4cuobbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:mail-twotone"} {...others} />);
}

export default Component;
