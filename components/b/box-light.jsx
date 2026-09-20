import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/snx9u9blb.css';
import '../../css/h/hv9wxdvso.css';
import '../../css/i/ib_y_5qcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="snx9u9blb"/><path class="hv9wxdvso"/><path class="ib_y_5qcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:box-light"} {...others} />);
}

export default Component;
