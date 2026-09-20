import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uc2060b1x.css';
import '../../css/r/ryafn0b0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uc2060b1x"/><path class="ryafn0b0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tool-case"} {...others} />);
}

export default Component;
