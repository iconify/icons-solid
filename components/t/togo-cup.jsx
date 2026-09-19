import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fbfr-hb0c.css';
import '../../css/m/m_t06emlg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fbfr-hb0c"/><path class="m_t06emlg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:togo-cup"} {...others} />);
}

export default Component;
