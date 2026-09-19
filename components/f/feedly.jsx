import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oen4v5bni.css';

const viewBox = {"width":640,"height":1024};
const content = `<path class="oen4v5bni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:feedly"} {...others} />);
}

export default Component;
