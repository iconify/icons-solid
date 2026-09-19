import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxan9g_6r.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="qxan9g_6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:minus-circle"} {...others} />);
}

export default Component;
