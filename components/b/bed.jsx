import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yk6z--b7f.css';
import '../../css/c/cx719ibex.css';
import '../../css/x/x2qkt4bza.css';
import '../../css/o/o37ep4the.css';
import '../../css/f/fzxwexbbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="yk6z--b7f"/><path class="cx719ibex"/><path class="x2qkt4bza"/><path class="o37ep4the"/><path class="fzxwexbbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:bed"} {...others} />);
}

export default Component;
