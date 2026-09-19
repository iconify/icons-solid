import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfnuo7ojb.css';
import '../../css/t/tmkl2dpkt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bfnuo7ojb"/><path class="tmkl2dpkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:lightbulb-off-solid"} {...others} />);
}

export default Component;
