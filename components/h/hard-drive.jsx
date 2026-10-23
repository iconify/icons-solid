import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/h5bwgp51v.css';
import '../../css/j/j7zjl_tvs.css';
import '../../css/f/frbkr5v1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="h5bwgp51v"/><path class="j7zjl_tvs"/><path class="frbkr5v1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:hard-drive"} {...others} />);
}

export default Component;
