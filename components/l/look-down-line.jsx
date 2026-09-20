import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/av0sy3bmo.css';
import '../../css/w/wli-clb7a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="av0sy3bmo"/><path class="wli-clb7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:look-down-line"} {...others} />);
}

export default Component;
