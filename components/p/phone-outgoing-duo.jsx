import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kluierb0w.css';
import '../../css/z/zo9frohsb.css';
import '../../css/s/spnf93r-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kluierb0w"/><path class="wm-s zo9frohsb"/><path class="spnf93r-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:phone-outgoing-duo"} {...others} />);
}

export default Component;
