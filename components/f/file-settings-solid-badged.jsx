import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmf0ecbhq.css';
import '../../css/c/cbjx-lv-q.css';
import '../../css/v/vwqaxbc0v.css';
import '../../css/a/addbdeb0z.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-1--badged lmf0ecbhq"/><path class="cbjx-lv-q clr-i-solid--badged clr-i-solid-path-2--badged"/><path class="clr-i-solid--badged clr-i-solid-path-3--badged vwqaxbc0v"/><path class="addbdeb0z clr-i-solid--badged clr-i-solid-path-4--badged"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:file-settings-solid-badged"} {...others} />);
}

export default Component;
