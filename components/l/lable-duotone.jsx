import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glpy9wu7t.css';
import '../../css/t/tr_qzvbuu.css';
import '../../css/f/fd6xyabdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="glpy9wu7t"><path class="tr_qzvbuu"/><circle class="fd6xyabdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:lable-duotone"} {...others} />);
}

export default Component;
