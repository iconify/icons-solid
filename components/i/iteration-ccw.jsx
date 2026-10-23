import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u8e6_jcrb.css';
import '../../css/d/dnsnwocfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u8e6_jcrb"/><path class="dnsnwocfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:iteration-ccw"} {...others} />);
}

export default Component;
