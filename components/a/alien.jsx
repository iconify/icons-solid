import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zs9z5gbzp.css';
import '../../css/g/gn8n_3teu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zs9z5gbzp"/><path class="gn8n_3teu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:alien"} {...others} />);
}

export default Component;
