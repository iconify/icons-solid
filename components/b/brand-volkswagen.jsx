import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i8o4ou2jc.css';
import '../../css/n/n184ddbjd.css';
import '../../css/k/ktrnanbdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i8o4ou2jc"/><path class="n184ddbjd"/><path class="ktrnanbdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-volkswagen"} {...others} />);
}

export default Component;
