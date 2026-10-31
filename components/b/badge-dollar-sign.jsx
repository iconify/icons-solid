import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/p4u7d8hbn.css';
import '../../css/f/f7gqgccam.css';
import '../../css/t/txpl3bcgs.css';
import '../../css/z/zz78rlzgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="p4u7d8hbn wm-shadow"/><path class="f7gqgccam wm-shadow"/><path class="txpl3bcgs"/><path class="zz78rlzgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:badge-dollar-sign"} {...others} />);
}

export default Component;
