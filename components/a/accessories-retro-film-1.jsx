import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k13g4ld-j.css';
import '../../css/j/jpx3_871k.css';
import '../../css/b/b_yth_bng.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="k13g4ld-j"/><path class="jpx3_871k"/><path class="b_yth_bng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:accessories-retro-film-1"} {...others} />);
}

export default Component;
