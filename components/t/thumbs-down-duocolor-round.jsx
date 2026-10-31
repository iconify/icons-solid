import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gxrw_4yjw.css';
import '../../css/s/sdzlwabve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gxrw_4yjw"/><path class="sdzlwabve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:thumbs-down-duocolor-round"} {...others} />);
}

export default Component;
