import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvwfwbb0g.css';
import '../../css/p/ptkyfbcbp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lvwfwbb0g"/><path class="ptkyfbcbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-group"} {...others} />);
}

export default Component;
