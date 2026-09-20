import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/bkdo0vn9i.css';
import '../../css/k/kz_vl5ant.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="bkdo0vn9i"/><path class="kz_vl5ant"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:blank-light"} {...others} />);
}

export default Component;
