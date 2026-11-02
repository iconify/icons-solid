import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv3n77kdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nv3n77kdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chopsticks-line"} {...others} />);
}

export default Component;
