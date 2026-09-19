import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/js7tbtbkw.css';
import '../../css/j/j1nyzswop.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="js7tbtbkw"/><path class="j1nyzswop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:moon-crater"} {...others} />);
}

export default Component;
