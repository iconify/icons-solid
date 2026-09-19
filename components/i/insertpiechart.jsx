import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_ch57g7n.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="l_ch57g7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:insertpiechart"} {...others} />);
}

export default Component;
