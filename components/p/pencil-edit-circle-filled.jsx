import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdtpq1bge.css';
import '../../css/l/l2x5o3qgt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mdtpq1bge"/><path class="l2x5o3qgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pencil-edit-circle-filled"} {...others} />);
}

export default Component;
