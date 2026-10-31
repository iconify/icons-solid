import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y_quf75fd.css';
import '../../css/i/iz2ssg40l.css';
import '../../css/j/j-n8u1bal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow y_quf75fd"/><path class="iz2ssg40l wm-shadow"/><path class="j-n8u1bal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:language"} {...others} />);
}

export default Component;
