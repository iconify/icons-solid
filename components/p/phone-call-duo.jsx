import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kluierb0w.css';
import '../../css/q/qg-givbyo.css';
import '../../css/s/spnf93r-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kluierb0w"/><path class="qg-givbyo wm-s"/><path class="spnf93r-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-call-duo"} {...others} />);
}

export default Component;
