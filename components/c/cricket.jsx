import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d-45sml5j.css';
import '../../css/l/l1sp9-bhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d-45sml5j"/><path class="l1sp9-bhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cricket"} {...others} />);
}

export default Component;
