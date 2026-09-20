import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o65s8tnxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o65s8tnxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:grid-3x3"} {...others} />);
}

export default Component;
