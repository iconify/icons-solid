import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r69_adbss.css';
import '../../css/e/eg7twmghe.css';
import '../../css/l/llszwq3cc.css';
import '../../css/e/e28qe2bte.css';
import '../../css/o/o0g-8w6fp.css';
import '../../css/g/g_jxv5bwf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r69_adbss wm-k"/><path class="eg7twmghe wm-k"/><path class="llszwq3cc wm-a"/><path class="e28qe2bte wm-a"/><path class="o0g-8w6fp wm-a"/><path class="g_jxv5bwf wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:camera"} {...others} />);
}

export default Component;
