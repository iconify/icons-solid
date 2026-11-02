import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-3o2v47x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-3o2v47x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:clipboard-copy-line"} {...others} />);
}

export default Component;
