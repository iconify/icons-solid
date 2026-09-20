import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dew-5bgmm.css';
import '../../css/u/ugvjznb6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dew-5bgmm"/><path class="ugvjznb6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-pen-duotone"} {...others} />);
}

export default Component;
