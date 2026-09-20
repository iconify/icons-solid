import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ndfmym4jm.css';
import '../../css/i/iswynubfo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ndfmym4jm"/><path class="iswynubfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-loop-left"} {...others} />);
}

export default Component;
