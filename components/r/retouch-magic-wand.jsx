import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gkddejbjm.css';
import '../../css/m/m0xu3lb3d.css';
import '../../css/e/ekppvbc7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="gkddejbjm"/><path class="m0xu3lb3d"/><path class="ekppvbc7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:retouch-magic-wand"} {...others} />);
}

export default Component;
