import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/po8f5pbax.css';
import '../../css/o/o30whc3oo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="po8f5pbax"/><path class="o30whc3oo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-lock"} {...others} />);
}

export default Component;
