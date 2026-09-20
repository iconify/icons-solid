import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cb82pd0la.css';
import '../../css/v/vba2tdvwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cb82pd0la"/><path class="vba2tdvwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:propeller-off"} {...others} />);
}

export default Component;
