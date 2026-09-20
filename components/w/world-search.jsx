import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dw-9ceu9o.css';
import '../../css/t/t4eckzb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dw-9ceu9o"/><path class="t4eckzb5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-search"} {...others} />);
}

export default Component;
