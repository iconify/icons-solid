import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ilarnua5f.css';
import '../../css/m/m0ayknbro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ilarnua5f"/><path class="m0ayknbro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mars-fill"} {...others} />);
}

export default Component;
