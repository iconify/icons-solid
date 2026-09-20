import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bizb7ubav.css';
import '../../css/m/m3tp5udax.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bizb7ubav"/><path class="m3tp5udax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:server-sftp-folder"} {...others} />);
}

export default Component;
