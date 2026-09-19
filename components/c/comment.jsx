import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/j/jeatfnbnz.css';
import '../../css/y/yu1x0auxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="jeatfnbnz"/><path class="yu1x0auxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:comment"} {...others} />);
}

export default Component;
