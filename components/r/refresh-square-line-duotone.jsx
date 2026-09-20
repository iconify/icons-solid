import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c7w-5n9ga.css';
import '../../css/t/t4ia2kbjp.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c7w-5n9ga"/><path class="t4ia2kbjp"/><path class="wf89k6buf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:refresh-square-line-duotone"} {...others} />);
}

export default Component;
