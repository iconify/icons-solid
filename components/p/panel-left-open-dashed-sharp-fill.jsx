import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hwv8c50wu.css';
import '../../css/d/dwlz50b1l.css';
import '../../css/h/h5zq5sxkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="hwv8c50wu"/><path class="dwlz50b1l"/><path class="h5zq5sxkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-left-open-dashed-sharp-fill"} {...others} />);
}

export default Component;
