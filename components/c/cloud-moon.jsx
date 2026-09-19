import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ioxgoz4jx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ioxgoz4jx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cloud-moon"} {...others} />);
}

export default Component;
