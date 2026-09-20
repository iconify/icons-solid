import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2_9e0yug.css';
import '../../css/l/lupyzslyb.css';
import '../../css/u/u64cjhbzz.css';
import '../../css/t/tk5imdb6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n2_9e0yug"/><path class="lupyzslyb"/><path class="u64cjhbzz"/><path class="tk5imdb6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:rocket"} {...others} />);
}

export default Component;
