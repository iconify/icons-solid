import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp8n6hb0n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lp8n6hb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:browser-chrome"} {...others} />);
}

export default Component;
