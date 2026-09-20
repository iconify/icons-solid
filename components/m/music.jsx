import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fy_59cb6y.css';
import '../../css/f/fttoz5bbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fy_59cb6y"/><path class="fttoz5bbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:music"} {...others} />);
}

export default Component;
