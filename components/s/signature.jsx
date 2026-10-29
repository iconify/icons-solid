import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz5lihbyw.css';
import '../../css/r/r-5a6yibn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vz5lihbyw wm-k"/><path class="r-5a6yibn wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:signature"} {...others} />);
}

export default Component;
