import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/flhgcwu9s.css';
import '../../css/b/baqhphbbl.css';
import '../../css/e/eh69lwb0v.css';
import '../../css/a/aeuv7ifjx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="flhgcwu9s"/><ellipse class="baqhphbbl"/><path clip-rule="evenodd" class="eh69lwb0v"/><path clip-rule="evenodd" class="aeuv7ifjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-speak2-filled"} {...others} />);
}

export default Component;
