import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/om1vn3bio.css';
import '../../css/r/r27asjbrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="om1vn3bio"/><path class="r27asjbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:paintbrush-two-tone"} {...others} />);
}

export default Component;
