import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avfae6r4y.css';
import '../../css/z/zktzbwarh.css';
import '../../css/j/jpzfqppud.css';
import '../../css/c/cwx99dqze.css';

const viewBox = {"width":633.333,"height":633.333};
const content = `<g class="avfae6r4y"><path class="zktzbwarh"/><path class="jpzfqppud"/></g><path class="cwx99dqze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bayer"} {...others} />);
}

export default Component;
