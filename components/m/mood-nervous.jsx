import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vdyd8oaxp.css';
import '../../css/a/a1qjv_r2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vdyd8oaxp"/><path class="a1qjv_r2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-nervous"} {...others} />);
}

export default Component;
