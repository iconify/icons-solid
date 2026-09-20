import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ypykr48yq.css';
import '../../css/x/xtsrmvj7o.css';
import '../../css/g/g-0q11brt.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ypykr48yq"/><circle class="xtsrmvj7o"/><path class="g-0q11brt"/><circle class="h_tsn8bxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:radius"} {...others} />);
}

export default Component;
