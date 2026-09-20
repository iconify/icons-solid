import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m2ljm37ev.css';
import '../../css/c/cql1pwtbp.css';
import '../../css/f/fv913ubql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m2ljm37ev"/><circle class="cql1pwtbp"/><path class="fv913ubql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:baby-pacifier"} {...others} />);
}

export default Component;
