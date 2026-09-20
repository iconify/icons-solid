import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cipng3b0p.css';
import '../../css/s/sjrjyxbla.css';
import '../../css/w/w8l0xeb0g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cipng3b0p"/><path class="sjrjyxbla"/><path class="w8l0xeb0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-graph-two-tone"} {...others} />);
}

export default Component;
