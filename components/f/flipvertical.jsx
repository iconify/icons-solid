import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycfilm2yw.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ycfilm2yw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:flipvertical"} {...others} />);
}

export default Component;
