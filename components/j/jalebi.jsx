import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/buwdhmbcr.css';
import '../../css/o/o8z075b6j.css';
import '../../css/k/ka_9jsbhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="buwdhmbcr wm-shadow"/><path class="o8z075b6j wm-shadow"/><path class="ka_9jsbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:jalebi"} {...others} />);
}

export default Component;
