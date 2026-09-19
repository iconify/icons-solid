import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zeadyab1k.css';
import '../../css/j/j8yh1x58g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zeadyab1k"/><path class="j8yh1x58g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pcn-e-node"} {...others} />);
}

export default Component;
