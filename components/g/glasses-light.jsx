import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/d/deu51qbtw.css';
import '../../css/c/cj9-yqbqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="deu51qbtw"/><path class="cj9-yqbqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:glasses-light"} {...others} />);
}

export default Component;
