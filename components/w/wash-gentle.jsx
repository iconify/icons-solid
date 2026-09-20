import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sn4-c-bco.css';
import '../../css/y/yv3ui9h0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sn4-c-bco"/><path class="yv3ui9h0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-gentle"} {...others} />);
}

export default Component;
