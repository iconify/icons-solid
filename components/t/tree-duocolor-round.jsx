import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mfau-nh5u.css';
import '../../css/a/amo4yk7fe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mfau-nh5u"/><path class="amo4yk7fe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tree-duocolor-round"} {...others} />);
}

export default Component;
