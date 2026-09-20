import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vyd-8pbto.css';
import '../../css/w/w7olv9abc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vyd-8pbto"/><path class="w7olv9abc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:credit-card-minus-two-tone"} {...others} />);
}

export default Component;
