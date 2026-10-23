import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b7-zp0bwh.css';
import '../../css/u/u4r_v2bcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b7-zp0bwh"/><path class="u4r_v2bcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:lollipop"} {...others} />);
}

export default Component;
