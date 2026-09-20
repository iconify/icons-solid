import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ixaxsccoc.css';
import '../../css/p/p9kyu798w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ixaxsccoc"/><path class="p9kyu798w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gallery-horizontal-start-duotone"} {...others} />);
}

export default Component;
