import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gk90e1xta.css';
import '../../css/c/cigxasbbf.css';
import '../../css/r/rkqwqebzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gk90e1xta"/><path class="cigxasbbf"/><path class="rkqwqebzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lawn-mower"} {...others} />);
}

export default Component;
