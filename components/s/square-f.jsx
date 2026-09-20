import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/npgigsivs.css';
import '../../css/w/wnpkb0yso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="npgigsivs"/><path class="wnpkb0yso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-f"} {...others} />);
}

export default Component;
