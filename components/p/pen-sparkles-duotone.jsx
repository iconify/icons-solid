import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zgwutpbmz.css';
import '../../css/t/t2f0xziff.css';
import '../../css/e/eq5qdjq0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zgwutpbmz"/><path class="t2f0xziff"/><path class="eq5qdjq0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pen-sparkles-duotone"} {...others} />);
}

export default Component;
