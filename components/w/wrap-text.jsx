import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j99gob0mc.css';
import '../../css/d/ds05-6f5u.css';
import '../../css/c/co65krbus.css';
import '../../css/b/bqkk0cclt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="j99gob0mc"/><path class="ds05-6f5u"/><path class="co65krbus"/><path class="bqkk0cclt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:wrap-text"} {...others} />);
}

export default Component;
