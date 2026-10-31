import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/riisj1nkm.css';
import '../../css/s/s-207ebhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="riisj1nkm"/><path class="s-207ebhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:upload-duocolor-round"} {...others} />);
}

export default Component;
