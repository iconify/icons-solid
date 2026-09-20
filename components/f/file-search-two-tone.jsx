import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qvehsibed.css';
import '../../css/v/vpifvlbsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qvehsibed"/><path class="vpifvlbsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:file-search-two-tone"} {...others} />);
}

export default Component;
