import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/owjmjfw0k.css';
import '../../css/c/c_zdt_bqs.css';
import '../../css/b/bunvz77al.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="owjmjfw0k"/><path class="c_zdt_bqs"/><path class="bunvz77al"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-check-bold-duotone"} {...others} />);
}

export default Component;
