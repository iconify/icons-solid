import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v6zxihb8r.css';
import '../../css/t/t_oy9f_6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v6zxihb8r"/><path class="t_oy9f_6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tablet-up"} {...others} />);
}

export default Component;
