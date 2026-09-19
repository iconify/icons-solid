import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0oaufjyz.css';
import '../../css/t/t3d4-stmx.css';
import '../../css/p/p8i175dpp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f0oaufjyz"/><path class="t3d4-stmx"/><path class="p8i175dpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pinkwallet"} {...others} />);
}

export default Component;
