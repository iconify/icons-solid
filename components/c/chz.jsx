import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbmp02gqe.css';
import '../../css/y/y4rcvro_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wbmp02gqe"/><path class="y4rcvro_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:chz"} {...others} />);
}

export default Component;
