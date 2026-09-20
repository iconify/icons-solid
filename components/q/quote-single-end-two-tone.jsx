import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ppslvxbah.css';
import '../../css/r/r3i798dld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ppslvxbah"/><path class="r3i798dld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:quote-single-end-two-tone"} {...others} />);
}

export default Component;
