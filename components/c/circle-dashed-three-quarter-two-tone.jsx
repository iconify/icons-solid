import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/esurwb5xo.css';
import '../../css/i/i0n5glj9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="esurwb5xo"/><path class="i0n5glj9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-dashed-three-quarter-two-tone"} {...others} />);
}

export default Component;
