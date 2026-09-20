import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9po5oupe.css';
import '../../css/y/yzc-hjbtc.css';
import '../../css/o/oi80i7wcp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x9po5oupe"/><path class="yzc-hjbtc"/><path class="oi80i7wcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:ship"} {...others} />);
}

export default Component;
