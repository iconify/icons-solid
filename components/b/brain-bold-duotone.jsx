import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/q8__mwyec.css';
import '../../css/x/xufqh5b1e.css';
import '../../css/m/mkldlgbmq.css';
import '../../css/j/ja6888b4r.css';
import '../../css/e/ev43qtbhu.css';
import '../../css/a/at0hqrb-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="q8__mwyec"/><path class="xufqh5b1e"/></g><path class="mkldlgbmq"/><path class="ja6888b4r"/><path class="ev43qtbhu"/><path class="at0hqrb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:brain-bold-duotone"} {...others} />);
}

export default Component;
