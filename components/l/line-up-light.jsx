import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/g/gkra3_bci.css';
import '../../css/y/y30nsybkp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="gkra3_bci"/><path class="y30nsybkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:line-up-light"} {...others} />);
}

export default Component;
