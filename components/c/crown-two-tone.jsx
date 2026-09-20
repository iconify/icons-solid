import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vcobwrb9o.css';
import '../../css/f/f7h3-eqwn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vcobwrb9o"/><path class="f7h3-eqwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:crown-two-tone"} {...others} />);
}

export default Component;
