import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5yb7_b8j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q5yb7_b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:planet-box-remove"} {...others} />);
}

export default Component;
