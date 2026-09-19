import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpdpley1n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpdpley1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:edge-computing-outlined"} {...others} />);
}

export default Component;
