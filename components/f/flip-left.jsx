import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oiy9xvbxn.css';
import '../../css/t/tbwjrrbja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="oiy9xvbxn"/><path class="tbwjrrbja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flip-left"} {...others} />);
}

export default Component;
