import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_v9i_btp.css';
import '../../css/a/agfbt6b0b.css';
import '../../css/k/kqzenpjvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d_v9i_btp"/><path class="agfbt6b0b"/><path clip-rule="evenodd" class="kqzenpjvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:accessibility"} {...others} />);
}

export default Component;
