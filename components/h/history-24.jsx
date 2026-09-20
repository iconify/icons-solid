import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hohcf3gsm.css';
import '../../css/b/bmavll4ox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hohcf3gsm"/><path class="bmavll4ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:history-24"} {...others} />);
}

export default Component;
