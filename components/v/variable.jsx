import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yvrsyibld.css';
import '../../css/e/eugyjyouz.css';
import '../../css/b/bikjqe12u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow yvrsyibld"/><path class="eugyjyouz wm-shadow"/><path class="bikjqe12u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:variable"} {...others} />);
}

export default Component;
