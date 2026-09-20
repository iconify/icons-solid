import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hc4c1dbcn.css';
import '../../css/l/lem5jbczh.css';
import '../../css/u/uzbb7yy_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hc4c1dbcn"/><path class="lem5jbczh"/><path class="uzbb7yy_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:citrus"} {...others} />);
}

export default Component;
