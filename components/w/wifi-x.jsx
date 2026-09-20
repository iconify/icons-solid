import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/ddbpr9boz.css';
import '../../css/x/x92zbjgna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ddbpr9boz"/><path class="x92zbjgna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wifi-x"} {...others} />);
}

export default Component;
