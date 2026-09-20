import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pkkij8paj.css';
import '../../css/w/w2mqedb_e.css';
import '../../css/g/g3vtm102h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pkkij8paj"/><path class="w2mqedb_e"/><path clip-rule="evenodd" class="g3vtm102h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:routing2-duotone"} {...others} />);
}

export default Component;
