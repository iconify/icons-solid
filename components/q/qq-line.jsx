import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u265_o_gg.css';
import '../../css/f/fwtgwcf6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u265_o_gg"/><path class="fwtgwcf6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:qq-line"} {...others} />);
}

export default Component;
