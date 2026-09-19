import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wb-u0qbgn.css';
import '../../css/u/uk3bi2bxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wb-u0qbgn"/><path class="uk3bi2bxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-question"} {...others} />);
}

export default Component;
