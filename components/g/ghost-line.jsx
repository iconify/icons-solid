import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e85dptbxk.css';
import '../../css/y/yijn-abxr.css';
import '../../css/m/milycbc-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e85dptbxk"/><path class="yijn-abxr"/><path class="milycbc-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ghost-line"} {...others} />);
}

export default Component;
