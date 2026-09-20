import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vajax-0mf.css';
import '../../css/m/m0tcbnb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vajax-0mf"/><path class="m0tcbnb3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:chart-area"} {...others} />);
}

export default Component;
