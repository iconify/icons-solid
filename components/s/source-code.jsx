import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y5h8azfip.css';
import '../../css/g/g61v_cb0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y5h8azfip"/><path class="g61v_cb0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:source-code"} {...others} />);
}

export default Component;
