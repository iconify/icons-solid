import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pcw721sro.css';
import '../../css/n/n5-9d8b8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pcw721sro"/><path class="n5-9d8b8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:server-spark"} {...others} />);
}

export default Component;
