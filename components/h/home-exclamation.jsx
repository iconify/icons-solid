import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yh8y9p_ry.css';
import '../../css/q/qgl2-gcbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yh8y9p_ry"/><path class="qgl2-gcbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-exclamation"} {...others} />);
}

export default Component;
