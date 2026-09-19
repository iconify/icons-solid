import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_tx9jc_q.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="p_tx9jc_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:remove-sign"} {...others} />);
}

export default Component;
