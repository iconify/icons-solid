import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qu0egmbey.css';
import '../../css/n/n72rw4b2e.css';
import '../../css/u/ubarg2csw.css';
import '../../css/j/jlbm-ccbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qu0egmbey"/><circle class="n72rw4b2e"/><circle class="ubarg2csw"/><circle class="jlbm-ccbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:user-group"} {...others} />);
}

export default Component;
