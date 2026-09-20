import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xza0rac-q.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xza0rac-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:qr-code-outline"} {...others} />);
}

export default Component;
