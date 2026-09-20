import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbjjubn9a.css';

const viewBox = {"width":24,"height":24,"top":-1};
const content = `<path class="qbjjubn9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:tools"} {...others} />);
}

export default Component;
