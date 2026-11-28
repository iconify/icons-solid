import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yni2ox9wx.css';
import '../../css/r/rr69ofbzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary yni2ox9wx"/><path class="primary rr69ofbzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:fast-forward-duo"} {...others} />);
}

export default Component;
