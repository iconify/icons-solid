import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjp174btb.css';
import '../../css/f/fhnwp1bnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sjp174btb"/><path class="fhnwp1bnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-arrow-bold"} {...others} />);
}

export default Component;
