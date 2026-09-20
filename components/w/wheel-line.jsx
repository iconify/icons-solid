import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3z640blx.css';
import '../../css/g/givwvqkqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w3z640blx"/><path class="givwvqkqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:wheel-line"} {...others} />);
}

export default Component;
