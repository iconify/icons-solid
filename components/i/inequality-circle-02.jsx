import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vdbd48c3o.css';
import '../../css/b/bopwg-q6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vdbd48c3o"/><path class="bopwg-q6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:inequality-circle-02"} {...others} />);
}

export default Component;
