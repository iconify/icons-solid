import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgzl-06mg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qgzl-06mg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:download-2-line"} {...others} />);
}

export default Component;
