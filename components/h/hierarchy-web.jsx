import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xjecwpb6j.css';
import '../../css/f/fnick3f-z.css';
import '../../css/v/v9pdm5hvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xjecwpb6j"/><path class="fnick3f-z"/><path class="v9pdm5hvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:hierarchy-web"} {...others} />);
}

export default Component;
