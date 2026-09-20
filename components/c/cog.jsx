import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/remi148dy.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/h/hwsal5q-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="remi148dy"/><circle class="h_tsn8bxt"/><circle class="hwsal5q-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cog"} {...others} />);
}

export default Component;
