import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/bto4dm6ke.css';
import '../../css/g/gickxzgav.css';
import '../../css/i/iltqaebrd.css';
import '../../css/l/ljxk-4bkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="bto4dm6ke"/><path class="gickxzgav"/><path class="iltqaebrd"/><path class="ljxk-4bkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:unlock"} {...others} />);
}

export default Component;
