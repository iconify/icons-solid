import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qd0iukbcm.css';
import '../../css/r/rk7x5c74b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qd0iukbcm"/><path class="rk7x5c74b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hexagon-number-9"} {...others} />);
}

export default Component;
