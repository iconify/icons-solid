import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/px1bfwbyg.css';
import '../../css/x/xblgcabps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="px1bfwbyg"/><path class="xblgcabps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:facebook-messenger-alt"} {...others} />);
}

export default Component;
