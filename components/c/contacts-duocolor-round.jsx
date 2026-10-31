import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hil-cl8kn.css';
import '../../css/b/bys1qnb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hil-cl8kn"/><path class="bys1qnb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:contacts-duocolor-round"} {...others} />);
}

export default Component;
