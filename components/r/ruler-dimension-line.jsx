import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x-9_fnbai.css';
import '../../css/d/d62r-hbfd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x-9_fnbai"/><rect class="d62r-hbfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:ruler-dimension-line"} {...others} />);
}

export default Component;
