import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkqi2gdoy.css';
import '../../css/w/waq35gbzy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zkqi2gdoy"/><path class="waq35gbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-googleplus"} {...others} />);
}

export default Component;
