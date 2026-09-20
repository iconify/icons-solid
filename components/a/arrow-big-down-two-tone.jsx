import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mma31mmrc.css';
import '../../css/r/r5kslbl5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mma31mmrc"/><path class="r5kslbl5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-big-down-two-tone"} {...others} />);
}

export default Component;
