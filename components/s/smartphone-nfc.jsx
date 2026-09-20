import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yo02ilb4n.css';
import '../../css/l/lmomo9yey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="yo02ilb4n"/><path class="lmomo9yey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:smartphone-nfc"} {...others} />);
}

export default Component;
