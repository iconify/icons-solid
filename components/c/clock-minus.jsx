import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wvfjdvj6c.css';
import '../../css/g/gfu8oh_ql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wvfjdvj6c"/><path class="gfu8oh_ql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-minus"} {...others} />);
}

export default Component;
