import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l6a6v_m7k.css';
import '../../css/j/j0kx2gbuw.css';
import '../../css/i/i71k519nu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="l6a6v_m7k"/><path class="j0kx2gbuw"/><path class="i71k519nu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:paginate-filter-music"} {...others} />);
}

export default Component;
