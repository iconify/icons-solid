import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drvhp1nhb.css';
import '../../css/e/ew-j63_wx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="drvhp1nhb"/><path class="ew-j63_wx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:two-factor-authentication"} {...others} />);
}

export default Component;
