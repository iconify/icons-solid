import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_og7xf3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_og7xf3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:dashboard-ai"} {...others} />);
}

export default Component;
