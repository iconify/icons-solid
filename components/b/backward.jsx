import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0dc-4v8o.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="d0dc-4v8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:backward"} {...others} />);
}

export default Component;
