import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dguwovnoa.css';
import '../../css/p/pu_we-u1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dguwovnoa"/><path class="pu_we-u1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-column-sparkles-fill"} {...others} />);
}

export default Component;
