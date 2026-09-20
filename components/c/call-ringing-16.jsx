import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wf_jb02lk.css';
import '../../css/v/v3xgw3bxc.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="wf_jb02lk"/><path class="v3xgw3bxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:call-ringing-16"} {...others} />);
}

export default Component;
