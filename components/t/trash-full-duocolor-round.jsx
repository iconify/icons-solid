import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sju9b47kv.css';
import '../../css/c/cz5g47vfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sju9b47kv"/><path class="cz5g47vfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:trash-full-duocolor-round"} {...others} />);
}

export default Component;
