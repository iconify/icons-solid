import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h7h5xe7cb.css';
import '../../css/p/pf3ei9b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h7h5xe7cb"/><circle class="pf3ei9b0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shield-cog"} {...others} />);
}

export default Component;
