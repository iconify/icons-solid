import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/putkkbb4v.css';
import '../../css/b/ba-uen-7c.css';
import '../../css/f/fqi9fhbtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="putkkbb4v"/><path class="ba-uen-7c"/><path class="fqi9fhbtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:git-pull-request"} {...others} />);
}

export default Component;
