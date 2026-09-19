import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nar1qcwnr.css';
import '../../css/y/yc8u54bet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nar1qcwnr"/><path class="yc8u54bet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:medicine-bottle-02"} {...others} />);
}

export default Component;
