import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c3veszb2o.css';
import '../../css/j/jf5s6ugur.css';
import '../../css/d/dwec3ac1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="c3veszb2o"/><path class="jf5s6ugur"/><rect class="dwec3ac1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:between-vertical-end"} {...others} />);
}

export default Component;
