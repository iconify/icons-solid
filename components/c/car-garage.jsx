import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g-7lu9adm.css';
import '../../css/e/ed1g25uuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g-7lu9adm"/><path class="ed1g25uuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:car-garage"} {...others} />);
}

export default Component;
