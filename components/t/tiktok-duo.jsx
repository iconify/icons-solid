import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hy1r4hwit.css';
import '../../css/b/bkd0k5o0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hy1r4hwit secondary"/><path class="bkd0k5o0y primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:tiktok-duo"} {...others} />);
}

export default Component;
