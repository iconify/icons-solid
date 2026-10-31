import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z64abgesa.css';
import '../../css/q/qo-7f44mm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z64abgesa"/><path class="qo-7f44mm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:wallbox-duocolor-round"} {...others} />);
}

export default Component;
