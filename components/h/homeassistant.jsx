import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q84-m7bmy.css';
import '../../css/z/zr8ct4-nj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q84-m7bmy"/><path class="zr8ct4-nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:homeassistant"} {...others} />);
}

export default Component;
