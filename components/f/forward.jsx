import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbh0l5b0d.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="xbh0l5b0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:forward"} {...others} />);
}

export default Component;
