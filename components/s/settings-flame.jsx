import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/de4aa5bdu.css';
import '../../css/p/pia-ou0au.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="de4aa5bdu"/><path class="pia-ou0au"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:settings-flame"} {...others} />);
}

export default Component;
