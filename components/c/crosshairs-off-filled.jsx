import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/txlw-y26h.css';
import '../../css/b/bbdy775sr.css';
import '../../css/l/lvbvjwfmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="txlw-y26h"/><path clip-rule="evenodd" class="bbdy775sr"/><path class="lvbvjwfmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:crosshairs-off-filled"} {...others} />);
}

export default Component;
