import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lvahrq4nq.css';
import '../../css/j/j-xqrrbss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lvahrq4nq"/><path class="j-xqrrbss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mail-question"} {...others} />);
}

export default Component;
