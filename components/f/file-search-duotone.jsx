import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qvehsibed.css';
import '../../css/r/r1uqg-7je.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qvehsibed"/><path class="r1uqg-7je"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:file-search-duotone"} {...others} />);
}

export default Component;
