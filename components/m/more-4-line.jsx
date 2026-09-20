import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldjtx9lab.css';
import '../../css/m/mrqn0ob3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ldjtx9lab"/><path class="mrqn0ob3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:more-4-line"} {...others} />);
}

export default Component;
