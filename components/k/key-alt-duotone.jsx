import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjiz8hbrl.css';
import '../../css/r/rxa1r_t5i.css';
import '../../css/h/h5_ubqi0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fjiz8hbrl"/><circle class="rxa1r_t5i"/><path class="h5_ubqi0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:key-alt-duotone"} {...others} />);
}

export default Component;
