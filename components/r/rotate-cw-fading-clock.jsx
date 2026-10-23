import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hcgck3pjz.css';
import '../../css/p/pszgemu3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hcgck3pjz"/><path class="pszgemu3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:rotate-cw-fading-clock"} {...others} />);
}

export default Component;
