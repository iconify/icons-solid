import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h4hac2qdv.css';
import '../../css/m/m4j28nbue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h4hac2qdv"/><path class="m4j28nbue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-discount"} {...others} />);
}

export default Component;
