import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2rhc9bli.css';
import '../../css/j/j4be6p33p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n2rhc9bli"/><path class="j4be6p33p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:percentage-fill"} {...others} />);
}

export default Component;
