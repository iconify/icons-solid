import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/amwa-x10o.css';
import '../../css/z/zs6nbgzoh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="amwa-x10o"/><path class="zs6nbgzoh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-sparkle-duocolor-round"} {...others} />);
}

export default Component;
