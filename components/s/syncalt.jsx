import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9j9zzbpt.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="d9j9zzbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:syncalt"} {...others} />);
}

export default Component;
