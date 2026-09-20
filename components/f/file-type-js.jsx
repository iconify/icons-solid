import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h4gxwp8_i.css';
import '../../css/p/paja9tbpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h4gxwp8_i"/><path class="paja9tbpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-type-js"} {...others} />);
}

export default Component;
