import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o63p0bcaz.css';
import '../../css/h/heb6v81zw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o63p0bcaz"/><path class="heb6v81zw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wanted"} {...others} />);
}

export default Component;
