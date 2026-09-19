import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-o-n6vfd.css';
import '../../css/h/hq6p7itxj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="a-o-n6vfd"/><path class="hq6p7itxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:polygon-wordmark"} {...others} />);
}

export default Component;
