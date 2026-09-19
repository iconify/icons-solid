import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajz0msr0g.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="ajz0msr0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:musicalt"} {...others} />);
}

export default Component;
