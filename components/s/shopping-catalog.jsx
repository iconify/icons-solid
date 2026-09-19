import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsr7ujquy.css';
import '../../css/b/b42j7_b-v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rsr7ujquy"/><path class="b42j7_b-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:shopping-catalog"} {...others} />);
}

export default Component;
