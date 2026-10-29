import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xqkvuwrqj.css';
import '../../css/d/ddhn4jyik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="xqkvuwrqj"/><path class="ddhn4jyik wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mails-solid"} {...others} />);
}

export default Component;
