import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nnccshiyx.css';
import '../../css/c/c7cra2b-g.css';
import '../../css/e/e0hfau-no.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="nnccshiyx"/><path class="c7cra2b-g"/><path class="e0hfau-no"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-alt-light"} {...others} />);
}

export default Component;
