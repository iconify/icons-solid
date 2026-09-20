import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yrldnrb1b.css';
import '../../css/a/an-mo36nu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yrldnrb1b"/><path class="an-mo36nu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:lamp-desk"} {...others} />);
}

export default Component;
