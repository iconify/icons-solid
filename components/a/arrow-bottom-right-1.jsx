import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c61g_vb5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c61g_vb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-bottom-right-1"} {...others} />);
}

export default Component;
