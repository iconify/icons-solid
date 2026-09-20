import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f5mkz9bge.css';
import '../../css/i/ib5zb1i1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f5mkz9bge"/><path class="ib5zb1i1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-adobe-premiere"} {...others} />);
}

export default Component;
