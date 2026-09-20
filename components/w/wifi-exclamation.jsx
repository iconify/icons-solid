import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eupnwwb3p.css';
import '../../css/d/dh28lk72a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eupnwwb3p"/><path class="dh28lk72a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wifi-exclamation"} {...others} />);
}

export default Component;
