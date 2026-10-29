import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih9840bcu.css';
import '../../css/m/m5xps3bmn.css';
import '../../css/e/esduqrofq.css';
import '../../css/w/wgz597bks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ih9840bcu wm-k"/><path class="m5xps3bmn wm-a"/><path class="esduqrofq wm-k"/><path class="wgz597bks wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:burger"} {...others} />);
}

export default Component;
