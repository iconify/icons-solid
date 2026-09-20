import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o2zl4tlgl.css';
import '../../css/r/ro8mhvb_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o2zl4tlgl"/><path class="ro8mhvb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:books-off"} {...others} />);
}

export default Component;
