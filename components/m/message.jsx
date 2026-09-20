import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/r/rb5793z0p.css';
import '../../css/z/z7r1tebxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="rb5793z0p"/><path class="z7r1tebxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:message"} {...others} />);
}

export default Component;
