import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yup12tbhc.css';
import '../../css/t/txw5etdzl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yup12tbhc"/><path class="txw5etdzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-photos-outline"} {...others} />);
}

export default Component;
