import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rlomlrauu.css';
import '../../css/y/yy9a156zt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rlomlrauu"/><path class="yy9a156zt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-check"} {...others} />);
}

export default Component;
