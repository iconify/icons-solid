import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awe8fabgt.css';
import '../../css/m/mi93fcc0q.css';
import '../../css/g/gdfhgsb7u.css';
import '../../css/b/bzd90obfh.css';
import '../../css/w/wvoup050v.css';
import '../../css/x/xghtqy_sr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="awe8fabgt wm-k"/><path class="mi93fcc0q wm-a"/><path class="gdfhgsb7u wm-a"/><path class="bzd90obfh wm-a"/><path class="wm-s wvoup050v"/><path class="wm-s xghtqy_sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:party-popper"} {...others} />);
}

export default Component;
