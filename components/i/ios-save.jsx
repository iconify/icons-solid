import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj98ljgyw.css';
import '../../css/y/yw3dmeumf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xj98ljgyw"/><path class="yw3dmeumf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-save"} {...others} />);
}

export default Component;
