import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ca27bzbkr.css';
import '../../css/q/q4y4c8bkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ca27bzbkr"/><circle class="q4y4c8bkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:camera"} {...others} />);
}

export default Component;
