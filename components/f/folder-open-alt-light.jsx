import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/aog4blbjt.css';
import '../../css/d/dx-yl882u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="aog4blbjt"/><path class="dx-yl882u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-open-alt-light"} {...others} />);
}

export default Component;
