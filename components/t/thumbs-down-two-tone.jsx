import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/ww_7gw6pj.css';
import '../../css/o/o3g4rd8ni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ww_7gw6pj"/><path class="o3g4rd8ni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:thumbs-down-two-tone"} {...others} />);
}

export default Component;
