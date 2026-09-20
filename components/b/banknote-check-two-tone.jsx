import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dwufu6b3h.css';
import '../../css/g/g48mum5by.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dwufu6b3h"/><path class="g48mum5by"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:banknote-check-two-tone"} {...others} />);
}

export default Component;
