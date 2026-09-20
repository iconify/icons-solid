import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/urvd_efow.css';
import '../../css/i/iqsbobj2a.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="urvd_efow"/><path class="iqsbobj2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-attachment-open"} {...others} />);
}

export default Component;
