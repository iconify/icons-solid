import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/odozyr5dg.css';
import '../../css/c/cz46b-bku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="odozyr5dg"/><rect class="cz46b-bku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tickets"} {...others} />);
}

export default Component;
