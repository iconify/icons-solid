import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzc6dub2d.css';
import '../../css/f/f7ljz7b1m.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="xzc6dub2d"/><path class="f7ljz7b1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:fish"} {...others} />);
}

export default Component;
