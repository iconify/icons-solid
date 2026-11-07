import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hrhj5ybtt.css';
import '../../css/q/qg2a123rv.css';
import '../../css/j/j8wqpub6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hrhj5ybtt"/><path class="qg2a123rv"/><path class="j8wqpub6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-right-line-duotone"} {...others} />);
}

export default Component;
