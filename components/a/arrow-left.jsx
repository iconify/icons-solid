import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3qcs9fwk.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="f3qcs9fwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:arrow-left"} {...others} />);
}

export default Component;
