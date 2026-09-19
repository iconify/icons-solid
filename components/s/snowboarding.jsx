import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy9vtw7wx.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="yy9vtw7wx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:snowboarding"} {...others} />);
}

export default Component;
