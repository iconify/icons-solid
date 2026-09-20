import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wvcxi1j2o.css';
import '../../css/i/ipf6v-78h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wvcxi1j2o"/><circle class="ipf6v-78h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:key-skeleton"} {...others} />);
}

export default Component;
