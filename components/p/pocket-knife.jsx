import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqlgc_bbb.css';
import '../../css/y/yexjaeb9c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hqlgc_bbb"/><path class="yexjaeb9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:pocket-knife"} {...others} />);
}

export default Component;
