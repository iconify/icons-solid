import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/mu8evp9-u.css';
import '../../css/z/za2b-fbhg.css';
import '../../css/m/mof3eqe_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect transform="rotate(90 18 15)" class="mu8evp9-u"/><rect transform="rotate(-90 6 8)" class="za2b-fbhg"/><path class="mof3eqe_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:nesting-light"} {...others} />);
}

export default Component;
