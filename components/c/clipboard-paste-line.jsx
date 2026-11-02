import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay5-2y51q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ay5-2y51q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:clipboard-paste-line"} {...others} />);
}

export default Component;
