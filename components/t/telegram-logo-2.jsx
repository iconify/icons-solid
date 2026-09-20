import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/g/g-jwkzq_q.css';
import '../../css/j/j697l3uzc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="g-jwkzq_q"/><path class="j697l3uzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:telegram-logo-2"} {...others} />);
}

export default Component;
