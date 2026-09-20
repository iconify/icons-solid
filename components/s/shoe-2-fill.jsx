import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l61g_dw_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l61g_dw_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:shoe-2-fill"} {...others} />);
}

export default Component;
