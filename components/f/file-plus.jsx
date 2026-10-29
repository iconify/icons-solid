import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jca4lnd7d.css';
import '../../css/z/z8lkaigyu.css';
import '../../css/m/mwsfceayy.css';
import '../../css/d/dc8x72n9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jca4lnd7d wm-k"/><path class="wm-k z8lkaigyu"/><path class="mwsfceayy wm-k"/><path class="dc8x72n9f wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:file-plus"} {...others} />);
}

export default Component;
