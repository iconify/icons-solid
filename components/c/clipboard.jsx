import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b8opj0i7z.css';
import '../../css/x/xptr09bzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b8opj0i7z"/><path class="xptr09bzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:clipboard"} {...others} />);
}

export default Component;
