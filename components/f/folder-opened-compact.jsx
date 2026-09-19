import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf57mkbcm.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="kf57mkbcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:folder-opened-compact"} {...others} />);
}

export default Component;
