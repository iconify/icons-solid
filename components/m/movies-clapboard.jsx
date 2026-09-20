import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xh5-s8jmy.css';
import '../../css/e/er1u1bb_c.css';
import '../../css/e/e-hg7fm7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xh5-s8jmy"/><path class="er1u1bb_c"/><path class="e-hg7fm7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:movies-clapboard"} {...others} />);
}

export default Component;
