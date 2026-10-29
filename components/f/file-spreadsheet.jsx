import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx94fvtdi.css';
import '../../css/j/j-rz0kfnd.css';
import '../../css/b/bq07eo2pj.css';
import '../../css/b/bjpkh6bgj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jx94fvtdi wm-k"/><path class="j-rz0kfnd wm-a"/><path class="bq07eo2pj wm-a"/><path class="bjpkh6bgj wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:file-spreadsheet"} {...others} />);
}

export default Component;
