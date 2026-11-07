import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp-oslbcg.css';
import '../../css/x/x1lrm4okj.css';
import '../../css/w/waeaixbmn.css';
import '../../css/i/ifw1webqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fp-oslbcg"/><path class="x1lrm4okj"/><path class="waeaixbmn"/><path class="ifw1webqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mask-sad-bold-duotone"} {...others} />);
}

export default Component;
