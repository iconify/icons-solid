import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yc8-c9bpp.css';
import '../../css/c/cwaizvbwy.css';
import '../../css/e/e6oycrkvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yc8-c9bpp"/><path class="cwaizvbwy"/><path class="e6oycrkvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:star-ring-duotone"} {...others} />);
}

export default Component;
