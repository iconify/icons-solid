import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3m6qu31q.css';
import '../../css/q/qe6mnv44d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b3m6qu31q"/><path class="qe6mnv44d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fish-20"} {...others} />);
}

export default Component;
