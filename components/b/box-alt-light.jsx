import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/fxvesbcqn.css';
import '../../css/s/snx9u9blb.css';
import '../../css/h/hv9wxdvso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="fxvesbcqn"/><path class="snx9u9blb"/><path class="hv9wxdvso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:box-alt-light"} {...others} />);
}

export default Component;
