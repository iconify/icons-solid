import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/ckmyj7xzo.css';
import '../../css/b/b0uwsz4ls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ckmyj7xzo"/><path class="b0uwsz4ls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:ring-light"} {...others} />);
}

export default Component;
