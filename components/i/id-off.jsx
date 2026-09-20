import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rvbhxeusd.css';
import '../../css/a/acyb7c6vx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rvbhxeusd"/><path class="acyb7c6vx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:id-off"} {...others} />);
}

export default Component;
