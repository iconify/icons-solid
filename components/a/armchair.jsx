import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jwtrj3ybq.css';
import '../../css/p/ppn14wb1e.css';
import '../../css/d/debbmob7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jwtrj3ybq"/><path class="ppn14wb1e"/><path class="debbmob7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:armchair"} {...others} />);
}

export default Component;
