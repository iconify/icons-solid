import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvg3fbb0b.css';
import '../../css/l/l7hgfejkj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bvg3fbb0b"/><path class="l7hgfejkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:reply-48-bold"} {...others} />);
}

export default Component;
