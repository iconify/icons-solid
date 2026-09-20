import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w8fixh2hi.css';
import '../../css/s/sxpj81bji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w8fixh2hi"/><path class="sxpj81bji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-pull-request-fill"} {...others} />);
}

export default Component;
