import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzk6tablr.css';
import '../../css/c/c3jne8b-d.css';
import '../../css/p/pmc-qsv6v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="rzk6tablr"/><path class="c3jne8b-d"/><path class="pmc-qsv6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:movie-film-duo"} {...others} />);
}

export default Component;
