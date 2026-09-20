import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2xoc41wx.css';
import '../../css/q/qkuiptbxn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="t2xoc41wx"/><path class="qkuiptbxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sauropod"} {...others} />);
}

export default Component;
