import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0bsb6ufu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q0bsb6ufu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:code-off"} {...others} />);
}

export default Component;
