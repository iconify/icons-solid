import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/ddds83y6u.css';
import '../../css/v/vr8mcipvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="icon-tabler nrj6p8qat"><path class="ddds83y6u"/><path class="vr8mcipvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:skip-back"} {...others} />);
}

export default Component;
