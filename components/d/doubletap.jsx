import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8n9ys8jf.css';

const viewBox = {"width":896,"height":1024};
const content = `<path class="c8n9ys8jf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:doubletap"} {...others} />);
}

export default Component;
