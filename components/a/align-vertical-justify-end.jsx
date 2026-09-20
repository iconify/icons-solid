import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n21evp_pt.css';
import '../../css/e/euxaoobyn.css';
import '../../css/e/eisa2cb9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="n21evp_pt"/><rect class="euxaoobyn"/><path class="eisa2cb9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:align-vertical-justify-end"} {...others} />);
}

export default Component;
