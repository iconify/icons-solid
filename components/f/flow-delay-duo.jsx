import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xb33x3b4v.css';
import '../../css/h/hs1_ig4jg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary xb33x3b4v"/><path class="hs1_ig4jg primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flow-delay-duo"} {...others} />);
}

export default Component;
