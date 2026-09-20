import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mpjsytqjw.css';
import '../../css/d/db9ccbbao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mpjsytqjw"/><path class="db9ccbbao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mail-two-tone"} {...others} />);
}

export default Component;
