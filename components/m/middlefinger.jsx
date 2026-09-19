import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1wq2x58v.css';

const viewBox = {"width":704,"height":1024};
const content = `<path class="y1wq2x58v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:middlefinger"} {...others} />);
}

export default Component;
