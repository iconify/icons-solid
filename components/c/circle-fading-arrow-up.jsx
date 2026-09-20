import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/flismrr_i.css';
import '../../css/t/tdq7zrbmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="flismrr_i"/><path class="tdq7zrbmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:circle-fading-arrow-up"} {...others} />);
}

export default Component;
