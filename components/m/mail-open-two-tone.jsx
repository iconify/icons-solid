import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mocjaebre.css';
import '../../css/s/sgui6mb8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mocjaebre"/><path class="sgui6mb8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mail-open-two-tone"} {...others} />);
}

export default Component;
