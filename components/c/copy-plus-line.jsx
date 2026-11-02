import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze3wtqlis.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ze3wtqlis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:copy-plus-line"} {...others} />);
}

export default Component;
