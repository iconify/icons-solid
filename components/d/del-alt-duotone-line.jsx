import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tv5tdk3ma.css';
import '../../css/n/nlcw3p9xy.css';
import '../../css/g/ghtk6ab_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tv5tdk3ma"/><ellipse class="nlcw3p9xy"/><path class="ghtk6ab_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:del-alt-duotone-line"} {...others} />);
}

export default Component;
